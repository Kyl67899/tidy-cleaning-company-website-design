import React from "react"

export default function PrivacyPage() {
    return (
        <div className="mx-auto mt-10 max-w-3xl rounded-4xl border border-[#dfe7dd] bg-white p-6 text-left shadow-[0_24px_70px_rgba(31,59,50,.10)] sm:p-9">
            <h1 className="text-2xl font-semibold text-[#1f3b32]">
                Privacy Policy
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#71807a]">
                Tidy Home is committed to protecting your privacy.
                This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                Information We Collect
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                We may collect personal information such as your name, email address, phone number, and service preferences when you submit a booking request or interact with our website.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                How We Use Your Information
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                We use the information we collect to process your booking requests, communicate with you regarding your appointments, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                Data Security
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                Changes to This Privacy Policy
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                Contact Us
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                If you have any questions or concerns about this Privacy Policy, please contact us at
                <a href="mailto:privacy@tidyhome.com" className="text-[#1f3b32] underline underline-offset-4">
                    privacy@tidyhome.com
                </a>.
            </p>

        </div>
    )
}