"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Get form data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validation
  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters long"];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address"];
  }

  if (!message || message.trim().length < 10) {
    errors.message = ["Message must be at least 10 characters long"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  try {
    // Configure email transport
    // Note: You should use environment variables for these values
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@belmare-tavern.com",
      to: process.env.CONTACT_EMAIL || "belmaretavern@gmail.com",
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
