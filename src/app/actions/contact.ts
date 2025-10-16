"use server";

import { getTranslations } from "next-intl/server";

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Get translations for contact form
  const t = await getTranslations("contact.form");

  // Get form data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // Validation
  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = [t("errors.nameRequired")];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = [t("errors.emailRequired")];
  }

  if (phone && phone.trim().length > 0 && phone.trim().length < 6) {
    errors.phone = [t("errors.phoneInvalid")];
  }

  if (!message || message.trim().length < 10) {
    errors.message = [t("errors.messageRequired")];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  try {
    // Validate required environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      throw new Error("Missing EmailJS configuration in environment variables");
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.EMAIL_TO_ADDRESS || "vdrosatos@icloud.com";

    // Prepare EmailJS request payload
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_phone: phone,
        to_email: recipientEmail,
        message: message,
      },
    };

    // Send email via EmailJS REST API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`EmailJS API error: ${response.status} - ${errorData}`);
    }

    return {
      success: true,
      message: t("success"),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: t("errors.sendError"),
    };
  }
}
