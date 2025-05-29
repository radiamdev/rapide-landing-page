import { MdFacebook, MdMail, MdPhone } from 'react-icons/md'

const contactItems = [
    {
        icon: <MdMail className="w-6 h-6 text-green-tertiary" />,
        link: 'mailto:contact@rapideapp.mg',
        label: 'contact@rapideapp.mg',
    },
    {
        icon: <MdFacebook className="w-6 h-6 text-green-tertiary" />,
        link: 'https://www.facebook.com/share/1AKupQh8dm/',
        label: 'rapideapp',
    },
    {
        icon: <MdPhone className="w-6 h-6 text-green-tertiary" />,
        link: 'tel:+261382268415',
        label: '+261 38 22 684 15',
    },
]

const ContactInfo = () => {
    return (
        <div className="py-5 px-12 rounded-2xl bg-green-tertiary backdrop-blur-md text-white shadow-xl">
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                {contactItems.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-3">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                        >
                            {item.icon}
                        </a>
                        <p className="text-white !font-semibold">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactInfo
