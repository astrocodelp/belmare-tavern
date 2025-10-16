"use client";

import { useTranslations } from "next-intl";
import { useActionState, useEffect, useRef, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = {};

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form state to preserve values on errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (state.success) {
      // Reset form data on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [state.success]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="mu-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-contact-area">
              <div className="mu-title">
                <span className="mu-subtitle"></span>
                <h2>{t("title")}</h2>
              </div>

              <div className="mu-contact-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mu-contact-left">
                      <div id="form-messages">
                        {state.message && (
                          <div
                            className={`alert ${state.success ? "alert-success" : "alert-danger"}`}
                          >
                            {state.message}
                          </div>
                        )}
                      </div>

                      <form
                        ref={formRef}
                        action={formAction}
                        className="mu-contact-form"
                      >
                        <div className="form-group">
                          <label htmlFor="name">
                            {t("form.name")} <span style={{ color: "red" }}>{t("form.required")}</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t("form.namePlaceholder")}
                            disabled={isPending}
                          />
                          {state.errors?.name && (
                            <span className="text-danger">
                              {state.errors.name[0]}
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">
                            {t("form.email")} <span style={{ color: "red" }}>{t("form.required")}</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t("form.emailPlaceholder")}
                            disabled={isPending}
                          />
                          {state.errors?.email && (
                            <span className="text-danger">
                              {state.errors.email[0]}
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">
                            {t("form.phone")} <span style={{ color: "#999" }}>{t("form.phoneOptional")}</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t("form.phonePlaceholder")}
                            disabled={isPending}
                          />
                          {state.errors?.phone && (
                            <span className="text-danger">
                              {state.errors.phone[0]}
                            </span>
                          )}
                        </div>

                        <div className="form-group">
                          <label htmlFor="message">
                            {t("form.message")} <span style={{ color: "red" }}>{t("form.required")}</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            cols={30}
                            rows={10}
                            placeholder={t("form.messagePlaceholder")}
                            disabled={isPending}
                          />
                          {state.errors?.message && (
                            <span className="text-danger">
                              {state.errors.message[0]}
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="mu-send-btn"
                          disabled={isPending}
                        >
                          {isPending ? t("form.sending") : t("form.submit")}
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mu-contact-right">
                      <div className="mu-contact-widget">
                        <h3>{t("info.title")}</h3>
                        <address>
                          <p>
                            <i className="fa fa-phone"></i> {t("info.phone")}
                          </p>
                          <p>
                            <i className="fa fa-envelope-o"></i>
                            {t("info.email")}
                          </p>
                          <p>
                            <i className="fa fa-map-marker"></i>
                            {t("info.address")}
                          </p>
                        </address>
                      </div>
                      <div className="mu-contact-widget">
                        <h3>{t("hours.title")}</h3>
                        <address>
                          <p>
                            <span>{t("hours.schedule")}</span> {t("hours.time")}
                          </p>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
