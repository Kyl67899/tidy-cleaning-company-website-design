import React from "react"

export default function TermsPage() {
    return (
        <div className="mx-auto mt-10 max-w-3xl rounded-4xl border border-[#dfe7dd] bg-white p-6 text-left shadow-[0_24px_70px_rgba(31,59,50,.10)] sm:p-9">
            <h1 className="text-2xl font-semibold text-[#1f3b32]">
                Terms of Service
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#71807a]">
                Welcome to Tidy Home! By using our services, you agree to the following terms and conditions. Please read them carefully.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                1. Service Description
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                Tidy Home provides home cleaning services, including but not limited to regular cleaning, deep cleaning, and move-in/move-out cleaning. We strive to deliver high-quality service, but we do not guarantee specific results or outcomes.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                2. Booking and Payment
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                All bookings must be made through our official channels. Payment is required at the time of booking, and we accept various payment methods. Please review our cancellation policy for details on refunds and rescheduling.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                3. Liability
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                Tidy Home is not liable for any damages or losses incurred during the provision of our services, except in cases of gross negligence or willful misconduct. Clients are responsible for securing valuable items and ensuring a safe environment for our staff.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                4. Changes to Terms
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                We reserve the right to modify these terms at any time. Any changes will be communicated through our website or other official channels. Continued use of our services constitutes acceptance of the updated terms.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-[#1f3b32]">
                5. Contact Us
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#71807a]">
                If you have any questions or concerns regarding these terms, please contact us at
                <a href="mailto:info@tidyhome.com" className="text-[#1f3b32] underline underline-offset-4">
                    info@tidyhome.com
                </a>.
            </p>
        </div>
    )
}