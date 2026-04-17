# EmailJS Setup Guide for Nexu360 Contact Form

The contact form uses **EmailJS** — a free service that sends emails directly
from your browser without needing a backend server.

---

## Step 1 — Create a Free EmailJS Account

Go to: https://www.emailjs.com
Click **Sign Up Free** (free tier allows 200 emails/month)

---

## Step 2 — Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred provider)
4. Follow the OAuth connection steps
5. Copy your **Service ID** (looks like: `service_xxxxxxx`)

---

## Step 3 — Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use these template variables in your template body:

```
From: {{from_name}} <{{from_email}}>
Company: {{company}}
Phone: {{phone}}
Enquiry Type: {{enquiry_type}}
Services Interested In: {{services}}
Budget: {{budget}}

Message:
{{message}}
```

3. Set **To Email** to: `hello@nexu360.com`
4. Set **Subject** to: `New Enquiry from {{from_name}} — Nexu360`
5. Save and copy your **Template ID** (looks like: `template_xxxxxxx`)

---

## Step 4 — Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `XXXXXXXXXXXXXXXXXXXX`)

---

## Step 5 — Add Your Keys to the Contact Form

Open `components/contact/ContactForm.tsx` and replace:

```typescript
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
```

With your actual values:

```typescript
const EMAILJS_SERVICE_ID  = "service_abc1234";
const EMAILJS_TEMPLATE_ID = "template_xyz5678";
const EMAILJS_PUBLIC_KEY  = "your_public_key_here";
```

---

## Step 6 — Test It

Run `npm run dev`, go to `/contact`, fill in the form and submit.
You should receive the email at `hello@nexu360.com` within seconds.

---

## Optional — Use Environment Variables (Recommended for Production)

Instead of hardcoding keys, use a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Then in `ContactForm.tsx`:
```typescript
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
```

When deploying to Vercel, add these same variables in:
**Project Settings → Environment Variables**
