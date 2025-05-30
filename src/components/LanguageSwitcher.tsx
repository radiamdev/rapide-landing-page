import { Menu, Button, Text, Group, Image } from '@mantine/core'
import { FiChevronDown } from 'react-icons/fi'
import i18n from '../utils/i18n'
import fr from '../assets/icons/fr.png'
import en from '../assets/icons/en.png'
import zh from '../assets/icons/zh.png'

const languages = [
    { code: 'fr', label: 'Français', icon: fr },
    { code: 'en', label: 'English', icon: en },
    { code: 'zh', label: '中国人', icon: zh },
] as const

export const LanguageSwitcher = ({ labelStyle = '!text-white' }: { labelStyle?: string }) => {
    const currentLang = i18n.language
    const current = languages.find((l) => l.code === currentLang)

    return (
        <Menu width={180} shadow="md">
            <Menu.Target>
                <Button
                    variant="outline"
                    size="sm"
                    radius="xl"
                    className="!bg-none !border-none"
                >
                    <Group gap={8}>
                        <Image
                            src={current?.icon}
                            alt={current?.label}
                            w={20}
                            h={20}
                        />
                        <Text size="sm" className={labelStyle}>
                            {current?.label}
                        </Text>
                        <FiChevronDown color="white" size={16} />
                    </Group>
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                {languages.map((lang) => (
                    <Menu.Item
                        key={lang.code}
                        onClick={() => i18n.changeLanguage(lang.code)}
                    >
                        <Group gap={10}>
                            <Image
                                src={lang.icon}
                                alt={lang.label}
                                w={20}
                                h={20}
                            />
                            <Text size="sm">{lang.label}</Text>
                        </Group>
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    )
}
