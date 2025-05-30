import { useTranslation } from "react-i18next"

const ContactForm = () => {
    const { t } = useTranslation()
    return (
        <div className="max-w-md w-full p-8 rounded-3xl bg-black/30 backdrop-blur-md text-white shadow-xl">
            <p className="text-sm text-white/70 mb-3">{t("homePage.contactUsSection.contactUs")}</p>
            <h2 className="text-3xl font-bold mb-8 tracking-wide font-mono uppercase cwf-regular">
                {t("homePage.contactUsSection.getInTouch")}
            </h2>

            <form className="space-y-12">
                <div>
                    {/* <label htmlFor="name" className="block text-sm mb-1">
                        Nom
                    </label> */}
                    <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b border-white/40 focus:outline-none focus:border-white transition text-white placeholder-white/60"
                        placeholder={t("homePage.contactUsSection.name")}
                    />
                </div>

                <div>
                    {/* <label htmlFor="email" className="block text-sm mb-1">
                        Email
                    </label> */}
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border-b border-white/40 focus:outline-none focus:border-white transition text-white placeholder-white/60"
                        placeholder={t("homePage.contactUsSection.email")}
                    />
                </div>

                <div>
                    {/* <label htmlFor="message" className="block text-sm mb-1">
                        Message
                    </label> */}
                    <textarea
                        id="message"
                        rows={3}
                        className="w-full bg-transparent border-b border-white/40 focus:outline-none focus:border-white transition text-white placeholder-white/60 resize-none"
                        placeholder={t("homePage.contactUsSection.message")}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-white text-black !font-semibold px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer"
                >
                    {t("homePage.contactUsSection.send")}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
