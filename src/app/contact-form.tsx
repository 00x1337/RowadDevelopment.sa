"use client";

import { useState, type FormEvent } from "react";

/* جهة التواصل: واتساب الشركة */
export const WHATSAPP_NUMBER = "966551500550";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = "+966 55 150 0550";
export const PHONE_TEL = "+966701832288";
export const PHONE_DISPLAY = "701832288";

const SERVICES: Record<string, string> = {
  buildings: "الإنشاءات والمباني",
  engineering: "الهندسة والتصاميم",
  infrastructure: "البنية التحتية",
  "holy-sites": "تجهيز المشاعر المقدسة",
};

const SERVICE_KEYS = Object.keys(SERVICES);

type Fields = {
  name: string;
  phone: string;
  service: string;
  city: string;
  details: string;
  consent: boolean;
};

type FieldName = keyof Fields;
type TextField = Exclude<FieldName, "consent">;

const EMPTY: Fields = { name: "", phone: "", service: "", city: "", details: "", consent: false };

const FIELD_ORDER: FieldName[] = ["name", "phone", "service", "city", "details", "consent"];

/* يحوّل الأرقام العربية/الفارسية، ويحذف المسافات والأقواس والشرطات */
function normalizePhone(raw: string) {
  return raw
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776))
    .replace(/[\s()\-]/g, "")
    .replace(/^00/, "+");
}

function validate(field: FieldName, values: Fields): string {
  switch (field) {
    case "name": {
      const name = values.name.trim();
      if (name.length < 2) return "اكتب اسمك من حرفين على الأقل.";
      if (name.length > 80) return "اكتب الاسم في ٨٠ حرفًا أو أقل.";
      return "";
    }
    case "phone": {
      const phone = normalizePhone(values.phone);
      const isSaudi = /^\+?966/.test(phone)
        ? /^\+?966[15]\d{8}$/.test(phone)
        : /^(?:0[15]\d{8}|5\d{8}|\+[1-9]\d{7,14})$/.test(phone);
      return isSaudi ? "" : "أدخل رقمًا سعوديًا صحيحًا، أو رقمًا دوليًا يبدأ بـ + ورمز الدولة.";
    }
    case "service":
      return SERVICE_KEYS.includes(values.service) ? "" : "اختر الخدمة المناسبة لمشروعك.";
    case "city":
      return values.city.trim().length > 100 ? "اكتب اسم المدينة في ١٠٠ حرف أو أقل." : "";
    case "details": {
      const details = values.details.trim();
      if (details.length < 10) return "أضف نبذة عن مشروعك من ١٠ أحرف على الأقل.";
      if (details.length > 2000) return "اختصر نبذة المشروع إلى ٢٠٠٠ حرف أو أقل.";
      return "";
    }
    case "consent":
      return values.consent ? "" : "يرجى الموافقة على مشاركة هذه البيانات لمناقشة مشروعك.";
    default:
      return "";
  }
}

function buildMessage(values: Fields) {
  return [
    "السلام عليكم، أرغب في مناقشة مشروع مع شركة رواد التعمير والتنمية.\n",
    `الاسم: ${values.name.trim()}`,
    `رقم التواصل: ${normalizePhone(values.phone)}`,
    `الخدمة: ${SERVICES[values.service]}`,
    `مدينة المشروع: ${values.city.trim() || "لم تُحدد بعد"}`,
    "\nنبذة عن المشروع:",
    values.details.trim(),
  ].join("\n");
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [feedback, setFeedback] = useState("");

  function setField(field: TextField, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    setFeedback("");
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validate(field, next) }));
  }

  function setConsent(value: boolean) {
    const next = { ...values, consent: value };
    setValues(next);
    setFeedback("");
    if (errors.consent) setErrors((prev) => ({ ...prev, consent: validate("consent", next) }));
  }

  function checkField(field: FieldName) {
    setErrors((prev) => ({ ...prev, [field]: validate(field, values) }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    for (const field of FIELD_ORDER) {
      const message = validate(field, values);
      if (message) nextErrors[field] = message;
    }
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setFeedback("راجع الحقول الموضحة أدناه لإكمال طلبك.");
      const target = event.currentTarget.elements.namedItem(firstInvalid);
      if (target instanceof HTMLElement) target.focus();
      return;
    }

    setFeedback("");
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage(values))}`,
      "_self",
      "noopener,noreferrer",
    );
  }

  const error = (field: FieldName) =>
    errors[field] ? (
      <small className="field-error" id={`project-${field}-error`}>
        {errors[field]}
      </small>
    ) : null;

  const describedBy = (field: FieldName) =>
    errors[field] ? `project-${field}-error` : undefined;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="ناقش مشروعك">
      <h3>أخبرنا عن مشروعك</h3>
      <small className="form-intro">بعض التفاصيل لنبدأ الحديث من المكان الصحيح.</small>
      <small className="form-note">الحقول المميزة بعلامة * مطلوبة.</small>
      <small className="form-feedback" role="status" aria-live="polite">
        {feedback}
      </small>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="project-name">
            الاسم <span aria-hidden="true">*</span>
          </label>
          <input
            id="project-name"
            name="name"
            autoComplete="name"
            placeholder="اسمك الكريم"
            required
            minLength={2}
            maxLength={80}
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            onBlur={() => checkField("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
          />
          {error("name")}
        </div>

        <div className="form-field">
          <label htmlFor="project-phone">
            رقم التواصل <span aria-hidden="true">*</span>
          </label>
          <input
            id="project-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder="05XXXXXXXX"
            required
            maxLength={30}
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
            onBlur={() => checkField("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
          />
          {error("phone")}
        </div>

        <div className="form-field">
          <label htmlFor="project-service">
            نوع الخدمة <span aria-hidden="true">*</span>
          </label>
          <select
            id="project-service"
            name="service"
            required
            value={values.service}
            onChange={(event) => setField("service", event.target.value)}
            onBlur={() => checkField("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={describedBy("service")}
          >
            <option value="" disabled>
              اختر الخدمة
            </option>
            {SERVICE_KEYS.map((key) => (
              <option key={key} value={key}>
                {SERVICES[key]}
              </option>
            ))}
          </select>
          {error("service")}
        </div>

        <div className="form-field">
          <label htmlFor="project-city">
            مدينة المشروع <span className="optional">(اختياري)</span>
          </label>
          <input
            id="project-city"
            name="city"
            autoComplete="address-level2"
            placeholder="مثل: مكة المكرمة"
            maxLength={100}
            value={values.city}
            onChange={(event) => setField("city", event.target.value)}
            onBlur={() => checkField("city")}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={describedBy("city")}
          />
          {error("city")}
        </div>

        <div className="form-field field-wide">
          <label htmlFor="project-details">
            حدثنا عن مشروعك <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="project-details"
            name="details"
            placeholder="نوع المشروع، موقعه، ونطاق الأعمال الذي تحتاجه…"
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            value={values.details}
            onChange={(event) => setField("details", event.target.value)}
            onBlur={() => checkField("details")}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={describedBy("details")}
          />
          {error("details")}
        </div>
      </div>

      <div className="form-field field-wide">
        <div className="consent-row">
          <input
            id="project-consent"
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(event) => setConsent(event.target.checked)}
            onBlur={() => checkField("consent")}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy("consent")}
          />
          <label htmlFor="project-consent">
            أوافق على مشاركة بياناتي لمناقشة مشروعي عبر واتساب.
          </label>
        </div>
        {error("consent")}
      </div>

      <button type="submit" className="button primary">
        متابعة عبر واتساب <span>←</span>
      </button>

      <small className="form-note">
        يفتح الزر واتساب لمراجعة رسالتك وإرسالها بنفسك. لا تُحفظ بيانات النموذج على الموقع.
      </small>
      <small className="form-note">
        أو تواصل معنا مباشرة على{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          واتساب
        </a>{" "}
        أو{" "}
        <a href={`tel:${PHONE_TEL}`}>
          الهاتف
        </a>
        .
      </small>
    </form>
  );
}
