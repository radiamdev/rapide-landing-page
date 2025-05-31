import { MdFacebook, MdMail, MdPhone } from 'react-icons/md'

const SocialMedia = ({ containerStyle }: { containerStyle?: string }) => {
    return (
        <div className={`flex gap-4 ${containerStyle}`}>
            <a
                href="https://www.facebook.com/share/1AKupQh8dm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
                <MdFacebook className="w-6 h-6 text-white" />
            </a>
            <a
                href="tel:038 22 684 15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
                <MdPhone className="w-6 h-6 text-white" />
            </a>
            <a
                href="mailto:contact@rapideapp.mg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
            >
                <MdMail className="w-6 h-6 text-white" />
            </a>
        </div>
    )
}

export default SocialMedia
