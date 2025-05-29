import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { useState } from 'react'
import { Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import rapideLogo from '../assets/rapide-logo.png'
import { useNavigate } from 'react-router-dom'

function Term() {
    const [language, setLanguage] = useState('EN')
    const [opened, { open, close }] = useDisclosure(false)
    const navigate = useNavigate()
    return (
        <>
            {/* Nav bar */}
            <div className="px-5 py-2 bg-[#0c0] flex justify-between items-center fixed w-full top-0 bg-image">
                <div>
                    <img
                        src={rapideLogo}
                        alt="rapide-logo"
                        width={150}
                        className="cursor-pointer"
                    />
                </div>
                {/** PC */}
                <div className="hidden md:flex gap-3 items-center text-white font-bold ">
                    <div
                        onClick={() => navigate('/')}
                        className="p-2 cursor-pointer"
                    >
                        {language === 'EN' ? 'Home' : 'Accueil'}
                    </div>
                    <a href="#term-conditions" className="p-2">
                        {language === 'EN'
                            ? 'Terms and Conditions'
                            : 'Conditions Générales d’Utilisation'}
                    </a>
                    <a href="#term-rapide-wallet" className="p-2">
                        Rapide Wallet
                    </a>
                    <div
                        onClick={() => navigate('/delete-account')}
                        className="p-2 cursor-pointer"
                    >
                        {language === 'EN'
                            ? 'Delete account'
                            : 'Suppression de compte'}
                    </div>
                    <a href="#policy" className="border-r-2 border-white p-2">
                        {language === 'EN'
                            ? 'Privacy policy'
                            : 'Politique de confidentialité'}
                    </a>
                    <select
                        defaultValue={language}
                        className="font-bold text-white border-r-2 border-white p-2"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="EN">EN 🇺🇲</option>
                        <option value="FR">FR 🇫🇷</option>
                    </select>
                    <a
                        href="https://www.facebook.com/share/1AKupQh8dm/"
                        target="_blank"
                        className=""
                    >
                        <FaFacebook size={20} />
                    </a>
                    <a
                        href="mailto:contact@rapide.mg"
                        className="border-r-2 border-white p-2"
                    >
                        <SiGmail size={20} />
                    </a>
                </div>
                {/** Mobile */}
                <div className="block md:hidden">
                    <Drawer opened={opened} onClose={close}>
                        <div className="text-[#0c0] flex flex-col gap-3">
                            <div
                                onClick={() => navigate('/')}
                                className="p-2 cursor-pointer"
                            >
                                {language === 'EN' ? 'Home' : 'Accueil'}
                            </div>
                            <a
                                href="#term-conditions"
                                className="hover:bg-gray-50 rounded p-2"
                                onClick={close}
                            >
                                {language === 'EN'
                                    ? 'Terms and Conditions'
                                    : 'Conditions Générales d’Utilisation'}
                            </a>
                            <a
                                href="#term-rapide-wallet"
                                className="p-2"
                                onClick={close}
                            >
                                Rapide Wallet
                            </a>
                            <div
                                onClick={() => navigate('/delete-account')}
                                className="p-2 cursor-pointer"
                            >
                                {language === 'EN'
                                    ? 'Delete account'
                                    : 'Suppression de compte'}
                            </div>
                            <a
                                href="#policy"
                                className="hover:bg-gray-50 rounded p-2"
                                onClick={close}
                            >
                                {language === 'EN'
                                    ? 'Privacy policy'
                                    : 'Politique de confidentialité'}
                            </a>
                            <select
                                defaultValue={language}
                                className="font-bold text-[#0c0] p-2 cursor-pointer hover:bg-gray-50 rounded"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="EN" onClick={close}>
                                    EN 🇺🇲
                                </option>
                                <option value="FR" onClick={close}>
                                    FR 🇫🇷
                                </option>
                            </select>
                        </div>
                    </Drawer>

                    <RiMenuUnfoldLine
                        onClick={open}
                        className="bg-[#04af04] p-1 w-[30px] h-[30px] text-white rounded hover:bg-white hover:text-[#04af04] cursor-pointer"
                    />
                </div>
            </div>

            {/* Term and conditions */}
            <div className="mt-14 p-10" id="term-conditions">
                <h1 className="text-4xl font-bold text-[#0c0]">
                    {language === 'EN'
                        ? `General Terms and Conditions of Use of the "Rapide App" Application`
                        : `Conditions Générales d’Utilisation de l’Application "Rapide App"`}
                </h1>
                <br />
                <br />

                {/** ABOUT US */}
                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN' ? 'ABOUT US' : 'À PROPOS DE NOUS'}
                </h2>
                <p>
                    {language === 'EN'
                        ? 'Rapide APP SARL, a limited liability company established in Madagascar with a capital of 100.000.000, registered in the Trade and Companies Register under number 2024 B 01514, tax identification number 6019056883 and headquartered in LOT IVT TSARAMASAY ANTANANARIVO 101.'
                        : 'Rapide APP SARL, société à responsabilité limitée établie à Madagascar au capital de 100.000.000, inscrite au registre de commerce et de société sous le numéro 2024 B 01514, numéro d’identification fiscale 6019056883 et ayant son siège social au LOT IVT TSARAMASAY ANTANANARIVO 101.'}
                </p>
                <br />
                <br />

                <ol className="list-decimal">
                    {/** 1. Purpose of the General Terms and Conditions of Use */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? 'Purpose of the General Terms and Conditions of Use'
                            : 'Objet des Conditions Générales d’Utilisation'}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `"Rapide App" is a digital platform offering passenger transport services. These Terms and Conditions of Use (TOS) define the rules for the use of the application, the rights and responsibilities of users, as well as the company's commitments to guarantee a reliable, secure and quality experience.`
                            : `"Rapide App" est une plateforme numérique offrant des services de transport de passagers. Ces Conditions Générales d’Utilisation (CGU) définissent les règles d’utilisation de l’application, les droits et responsabilités des utilisateurs, ainsi que les engagements de l’entreprise pour garantir une expérience fiable, sécurisée et de qualité.`}
                    </p>
                    <br />
                    <p>
                        {language === 'EN'
                            ? `Access to and use of "Rapide App" implies full and unreserved acceptance of these T&Cs. These terms and conditions may be modified at any time to respond to legal, technical or commercial developments. Any update will be notified through the application, leaving the user the possibility of withdrawing from the services in the event of non-compliance with their needs.`
                            : `L’accès et l’utilisation de "Rapide App" impliquent l’acceptation totale et sans réserve des présentes CGU. Ces conditions peuvent être modifiées à tout moment pour répondre aux évolutions légales, techniques ou commerciales. Toute mise à jour sera notifiée à travers l’application laissant à l’utilisateur la possibilité de se rétracter des services en cas de non-conformité avec ses besoins.`}
                    </p>
                    <br />
                    <br />

                    {/** 2. Registration and User Responsibilities */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Registration and User Responsibilities`
                            : `Inscription et Responsabilités de l’Utilisateur`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `To use "Quick App", the user must create an account and provide accurate, complete and up-to-date information.`
                            : `Pour utiliser "Rapide App", l’utilisateur doit créer un compte et fournir des informations exactes, complètes et à jour.`}
                    </p>
                    <br />
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            2.1.{' '}
                            {language === 'EN'
                                ? `Registration Process`
                                : `Processus d’Inscription`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `When registering, the user must provide:`
                                : `Lors de l’inscription, l’utilisateur doit obligatoirement renseigner :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `First and last name`
                                    : `Nom et prénom`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Valid phone number`
                                    : `Numéro de téléphone valide`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Date of birth`
                                    : `Date de naissance`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Full address`
                                    : `Adresse complète`}
                            </li>
                        </ul>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `The user will enter a password that will be used each time he connects and that will be his own. `
                                : `L’utilisateur renseignera un mot de passe qui lui servira à chaque connexion et qui lui sera propre. `}
                        </p>
                        <p>
                            {language === 'EN'
                                ? `This information is essential for customer identification and effective communication.`
                                : `Ces informations sont essentielles pour l’identification des clients et pour une communication efficace.`}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            2.2.{' '}
                            {language === 'EN'
                                ? `Security of Credentials`
                                : `Sécurité des Identifiants`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The user is responsible for the confidentiality of his/her login credentials. Any activity carried out under their account will be considered to have been carried out by them, unless they immediately report fraudulent use to the technical support team.`
                                : `L’utilisateur est responsable de la confidentialité de ses identifiants de connexion. Toute activité réalisée avec son compte sera considérée comme effectuée par lui, sauf en cas de signalement immédiat d’un usage frauduleux à l’équipe de support technique.`}
                        </p>

                        <br />
                        <h3 className="font-bold text-xl text-[#0c0]">
                            2.3.{' '}
                            {language === 'EN'
                                ? `Updating Information`
                                : `Mise à Jour des Informations`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The user undertakes to regularly update his personal data and payment information. In the event of a change not reported, "Rapide App" cannot be held responsible for poor performance of the services.`
                                : `L’utilisateur s’engage à actualiser régulièrement ses données personnelles et ses informations de paiement. En cas de changement non signalé, "Rapide App" ne pourra être tenue responsable d’une mauvaise exécution des services.`}
                        </p>
                    </div>
                    <br />
                    <br />

                    {/** 3. Use of the Services */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Use of the Services`
                            : `Utilisation des Services`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `"Rapide App" provides a transport service that must be used in compliance with the laws in force and the rules established by the company.`
                            : `"Rapide App" met à disposition un service de transport qui doivent être utilisés dans le respect des lois en vigueur et des règles établies par l’entreprise.`}
                    </p>
                    <br />
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            3.1.{' '}
                            {language === 'EN'
                                ? `Commitments of the User`
                                : `Engagements de l’Utilisateur`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The user undertakes to:`
                                : `L’utilisateur s’engage à :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Provide accurate, detailed, and accessible addresses.`
                                    : `Fournir des adresses précises, détaillées et accessibles.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Be punctual to avoid any delays or inconveniences.`
                                    : `Être ponctuel pour éviter tout retard ou désagrément.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Respect drivers and delivery people, and avoid abusive behavior.`
                                    : `Respecter les conducteurs et livreurs, et éviter tout comportement abusif.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Do not carry goods prohibited by local law (illegal products, dangerous substances, etc.).`
                                    : `Ne pas transporter de biens interdits par la législation locale (produits illégaux, substances dangereuses, etc.).`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Refrain from any behavior contrary to morality and the law during the journeys.`
                                    : `S’abstenir de tout comportement contraire à la morale et à la loi lors des trajets.`}
                            </li>
                        </ul>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `In the event of non-compliance, the company reserves the right to apply sanctions, such as temporary or permanent suspension of the account.`
                                : `En cas de non-respect, l’entreprise se réserve le droit d’appliquer des sanctions, telles que la suspension temporaire ou définitive du compte.`}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            3.2.{' '}
                            {language === 'EN'
                                ? `Operation of the service`
                                : `Fonctionnement du service`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The Fast App mobile app can be downloaded or accessed on most modern mobile devices with an internet connection and popular operating systems such as Android.`
                                : `L’application mobile Rapide App peut être téléchargés ou accessibles sur la plupart des appareils mobiles modernes disposant d’une connexion internet et équipés de systèmes d’exploitation répandus tels qu’Android.`}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `The user will be responsible for the costs of obtaining access to the network necessary for the use of services, in particular the internet. It is also responsible for accessing compatible devices and operating systems necessary for the use of the App(s) Services, including software or hardware updates.`
                                : `L’utilisateur aura à sa charge les frais afin d’obtenir l’accès au réseau nécessaire à l’utilisation des services notamment d’internet. Il lui incombe également d’accéder à des appareils et systèmes d’exploitation compatibles nécessaires à l’utilisation des Services App(s), y compris les mises à jour logicielles ou matérielles.`}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `In order to use the App(s) Services, you must register in the mobile applications. At the time of registration, you must be eighteen (18).`
                                : `Afin de pouvoir utiliser les Services App(s, vous devez vous enregistrer dans les applications mobiles. Au moment de l’inscription, vous devez avoir dix-huit (18).`}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `The user is not required to connect to the application, he or she may choose at any time to uninstall the application and leave the platform without informing the user. `
                                : `L’utilisateur n’est tenu d’aucune obligation de connexion à l’application, il peut choisir à tout moment de désinstaller l’application et de quitter la plateforme sans l’en informer. `}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `The Application may temporarily or permanently restrict a User's access to the Application in the event of a violation of its obligations under these Terms. `
                                : `L’application peut restreindre temporairement ou définitivement les accès à l’application d’un utilisateur en cas de violation de ses obligations au sein des présentes conditions. `}
                        </p>
                    </div>
                    <br />
                    <br />

                    {/** 4. Payment for Services */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Payment for Services`
                            : `Paiement des Services`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `Payment for services must be made immediately after their performance.`
                            : `Le règlement des services doit être effectué immédiatement après leur exécution.`}
                    </p>
                    <br />
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            4.1.{' '}
                            {language === 'EN'
                                ? `Accepted Payment Methods`
                                : `Modes de Paiement Acceptés`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `Users can pay their fees via:`
                                : `Les utilisateurs peuvent régler leurs frais via :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>Mobile Money</li>
                            <li>
                                {language === 'EN'
                                    ? `Secure bank cards`
                                    : `Cartes bancaires sécurisées`}
                            </li>
                            <li>Cash</li>
                        </ul>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `Payments are processed through gateways that comply with international security standards, ensuring that users' banking data is protected.`
                                : `Les paiements sont traités par des passerelles conformes aux normes de sécurité internationales, garantissant la protection des données bancaires des utilisateurs.`}
                        </p>
                        <br />
                        <h3 className="font-bold text-xl text-[#0c0]">
                            4.2.{' '}
                            {language === 'EN'
                                ? `Penalties for Non-Payment`
                                : `Pénalités pour Non-Paiement`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `In case of non-payment, the user has 24 hours to regularize his situation. Otherwise, sanctions will apply:`
                                : `En cas de non-paiement, l’utilisateur dispose de 24 heures pour régulariser sa situation. À défaut, des sanctions s’appliqueront :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Temporary or permanent account suspension.`
                                    : `Suspension temporaire ou définitive du compte.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Possibility of legal action for prolonged failure to pay.`
                                    : `Possibilité de poursuites judiciaires pour défaut prolongé de règlement.`}
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />

                    {/** 5. At the time of the race */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `At the time of the race`
                            : `Au Moment de la course`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `To ensure efficient service and avoid wasting time, users must comply with the following conditions during delivery.`
                            : `Pour garantir un service efficace et éviter les pertes de temps, les utilisateurs doivent respecter les conditions suivantes lors de la livraison.`}
                    </p>
                    <br />
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            5.1.{' '}
                            {language === 'EN'
                                ? `Presence at the Pick-up Site`
                                : `Présence au Lieu de récupération`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The user or an authorized person must be present at the pick-up address at the time of the driver's arrival.`
                                : `L’utilisateur ou une personne autorisée doit être présent(e) à l’adresse de récupération au moment de l’arrivée du conducteur.`}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `The driver will wait a maximum of 15 minutes.`
                                : `Le conducteur attendra un maximum de 15 minutes.`}
                        </p>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `If no one shows up after this time, the ride will be cancelled by the driver. 3 races no `
                                : `Si personne ne se présente après ce délai, la course sera annulée par le conducteur. 3 courses non `}
                        </p>
                    </div>
                    <br />
                    <br />

                    {/** 6. Protection of Personal and Banking Data */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Protection of Personal and Banking Data`
                            : `Protection des Données Personnelles et Bancaires`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `"Rapide App" places the security of personal and banking data at the heart of its priorities.`
                            : `"Rapide App" place la sécurité des données personnelles et bancaires au cœur de ses priorités.`}
                    </p>
                    <br />
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            6.1.{' '}
                            {language === 'EN'
                                ? `Data collected`
                                : `Données Collectées`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The data collected includes:`
                                : `Les données collectées incluent :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Personal information: name, surname, telephone number, addresses.`
                                    : `Informations personnelles : nom, prénom, numéro de téléphone, adresses.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Payment information: Mobile Money details or bank cards.`
                                    : `Informations de paiement : détails Mobile Money ou cartes bancaires.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `GPS location during races.`
                                    : `Localisation GPS durant les courses.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `History of orders and trips made.`
                                    : `Historique des commandes et trajets effectués.`}
                            </li>
                        </ul>
                        <br />
                        <h3 className="font-bold text-xl text-[#0c0]">
                            6.2.{' '}
                            {language === 'EN'
                                ? `Data security`
                                : `Sécurisation des Données`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The information is stored in secure servers and protected by advanced encryption protocols. "Rapide App" complies with international standards, such as PCI-DSS, for the protection of banking data.`
                                : `Les informations sont stockées dans des serveurs sécurisés et protégées par des protocoles de cryptage avancés. "Rapide App" respecte les normes internationales, telles que PCI-DSS, pour la protection des données bancaires.`}
                        </p>
                        <br />
                        <h3 className="font-bold text-xl text-[#0c0]">
                            6.3.{' '}
                            {language === 'EN'
                                ? `Use of Data`
                                : `Utilisation des Données`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `The data is used only to:`
                                : `Les données sont utilisées uniquement pour :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `To provide and improve services.`
                                    : `Fournir et améliorer les services.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Ensure a smooth user experience.`
                                    : `Garantir une expérience utilisateur fluide.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `To meet legal obligations if necessary.`
                                    : `Répondre aux obligations légales si nécessaire.`}
                            </li>
                        </ul>
                        <br />
                        <p>
                            {language === 'EN'
                                ? `No data is shared with third parties without the explicit consent of the user, except in the following cases:`
                                : `Aucune donnée n’est partagée avec des tiers sans le consentement explicite de l’utilisateur, sauf dans les cas suivants :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Legal obligations.`
                                    : `Obligations légales.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Approved and certified technical service providers.`
                                    : `Prestataires techniques agréés et certifié.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `A service provider or third party subject to an obligation similar to that of the application and necessary for the provision of a service`
                                    : `Prestataire ou tierce partie soumise à une obligation similaire à celle de l’application et nécessaire à la fourniture d’un service`}
                            </li>
                        </ul>
                        <br />
                        <h3 className="font-bold text-xl text-[#0c0]">
                            6.4.{' '}
                            {language === 'EN'
                                ? `Users' rights`
                                : `Droits des Utilisateurs`}
                        </h3>
                        <p>
                            {language === 'EN'
                                ? `Users can:`
                                : `Les utilisateurs peuvent :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Access, modify or delete their personal data at any time via their account.`
                                    : `Consulter, modifier ou supprimer leurs données personnelles à tout moment via leur compte.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Request the complete deletion of their profile by contacting customer service.`
                                    : `Demander la suppression complète de leur profil en contactant le service client.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Request information about the data collected and its purpose.`
                                    : `Demander les informations concernant les données collectées et leur finalité.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Request to be included only on the lists necessary to use the application. `
                                    : `Demander à ne figurer que sur les listes nécessaires à l’utilisation de l’application. `}
                            </li>
                        </ul>
                    </div>
                    <br />
                    <br />

                    {/** 7. Assistance and Dispute Resolution */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Assistance and Dispute Resolution`
                            : `Assistance et Résolution des Litiges`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `In the event of a claim or dispute, "Rapide App" prefers an amicable resolution. Users can contact customer service via:`
                            : `En cas de réclamation ou de litige, "Rapide App" privilégie une résolution à l’amiable. Les utilisateurs peuvent contacter le service client via :`}
                    </p>
                    <ul className="list-disc ml-10">
                        <li>
                            Email :{' '}
                            <a
                                href="mailto:contact@rapide.mg"
                                className="font-bold"
                            >
                                contact@rapide.mg
                            </a>{' '}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `24/7 online chat`
                                : `Chat en ligne disponible 24/7`}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `Dedicated phone number: `
                                : `Numéro de téléphone dédié : `}{' '}
                            <a href="telto:+261385162740" className="font-bold">
                                +261 38 32 684 15
                            </a>{' '}
                            /{' '}
                        </li>
                    </ul>
                    <br />
                    <br />

                    {/** 8. Corporate Responsibilities */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Corporate Responsibilities`
                            : `Responsabilités de l’Entreprise`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `"Rapide App" undertakes to:`
                            : `"Rapide App" s’engage à :`}
                    </p>
                    <ul className="list-disc ml-10">
                        <li>
                            {language === 'EN'
                                ? `Ensuring reliable and quality services.`
                                : `Assurer des services fiables et de qualité.`}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `Protect users' personal and banking data.`
                                : `Protéger les données personnelles et bancaires des utilisateurs.`}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `Provide prompt support in the event of a technical issue or complaint.`
                                : `Fournir une assistance rapide en cas de problème technique ou de réclamation.`}
                        </li>
                    </ul>
                    <br />
                    <p>
                        {language === 'EN'
                            ? `However, the company declines all responsibility for:`
                            : `Toutefois, l’entreprise décline toute responsabilité pour :`}
                    </p>
                    <ul className="list-disc ml-10">
                        <li>
                            {language === 'EN'
                                ? `Delays caused by external factors (weather conditions, traffic, unavailability of internet and mobile networks and force majeure).`
                                : `Les retards causés par des facteurs externes (conditions météo, trafic, indisponibilité des réseaux internet et mobiles et cas de force majeures).`}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `The consequences of the user providing incorrect addresses.`
                                : `Les conséquences liées à la fourniture d’adresses incorrectes par l’utilisateur.`}
                        </li>
                    </ul>
                    <br />
                    <br />

                    {/** 9. Modification of the General Terms and Conditions of Use */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Modification of the General Terms and Conditions of Use`
                            : `Modification des Conditions Générales d’Utilisation`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `These T&Cs may be modified at any time to adapt to changes in the services or laws in force. Any changes will be communicated via the app, and acceptance of the new terms will be required to continue using "Rapide App".`
                            : `Les présentes CGU peuvent être modifiées à tout moment pour s’adapter à l’évolution des services ou des lois en vigueur. Toute modification sera communiquée via l’application, et l’acceptation des nouvelles conditions sera requise pour continuer à utiliser "Rapide App".`}
                    </p>
                    <br />
                    <br />

                    {/** 10. Acceptance of Terms */}
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `Acceptance of Terms`
                            : `Acceptation des Conditions`}
                    </li>
                    <p>
                        {language === 'EN'
                            ? `By using the application, the user acknowledges that he or she has read and accepted these T&Cs.`
                            : `En utilisant l’application, l’utilisateur reconnaît avoir lu et accepté les présentes CGU.`}
                    </p>
                    <br />
                    <p>
                        {language === 'EN'
                            ? `If you have any questions or suggestions, please contact our customer service.`
                            : `Pour toute question ou suggestion, veuillez contacter notre service client.`}
                    </p>
                </ol>
            </div>

            {/* Term and conditions rapide wallet*/}
            <div className="mt-14 p-10" id="term-rapide-wallet">
                <h1 className="text-4xl font-bold text-[#0c0]">
                    {language === 'EN'
                        ? `General Terms and Conditions of Use of "Rapide Wallet"`
                        : `Conditions générales d’utilisation de "Rapide Wallet"`}
                </h1>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN' ? 'BY THE WAY' : 'À PROPOS'}
                </h2>
                <div className="">
                    <p>
                        {language === 'EN'
                            ? `This document defines the general terms and conditions of use of RAPIDE APP (your account) and the associated services. It also lays out other important things you need to know. These terms, together with the Privacy Policy and any other terms applicable to our services, constitute a legal agreement (the "Terms" or the "Agreement") between:`
                            : `Ce document définit les conditions générales d’utilisation de RAPIDE APP (votre compte) et des services associés. Il expose également d’autres éléments importants que vous devez connaître. Ces conditions, ainsi que la Politique de Confidentialité et toute autre condition applicable à nos services, constituent un accord juridique (les « Conditions » ou l’« Accord ») entre :`}
                    </p>
                    <ul className="list-disc ml-10">
                        <li>
                            {language === 'EN'
                                ? `You, the account holder; and`
                                : `Vous, le titulaire du compte ; et`}
                        </li>
                        <li>
                            {language === 'EN'
                                ? `RAPIDE APP, in partnership with Accès Banque Madagascar.`
                                : `RAPIDE APP, en partenariat avec Accès Banque Madagascar.`}
                        </li>
                    </ul>
                    <br />

                    <p>
                        {language === 'EN'
                            ? `It's important to understand how your account works. You may request a copy of these terms at any time through the RAPIDE APP.`
                            : `Il est important de comprendre le fonctionnement de votre compte. Vous pouvez demander une copie de ces conditions à tout moment via l’application RAPIDE APP.`}
                    </p>
                </div>
                <br />

                <ol className="list-decimal">
                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN' ? `THE SERVICE` : `LE SERVICE`}
                    </li>
                    <div className="">
                        <p>
                            {language === 'EN'
                                ? `Your account is a point storage system  (Wallet) that stores your credits electronically. The purchased credits can be used for purchases on the RAPIDE APP or to transfer to third parties. `
                                : `Votre compte est un système de de stockage de points (Wallet) qui stocke vos crédits électroniquement. Les crédits achetés peuvent être utilisés pour les achats sur RAPIDE APP ou pour transférer vers des tiers. `}
                        </p>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `USE OF THE SERVICE`
                            : `UTILISATION DU SERVICE`}
                    </li>
                    <div className="">
                        <p>
                            {language === 'EN'
                                ? `Once you have the Wallet, you can use our services, including:`
                                : `Une fois que vous disposez du Wallet, vous pouvez utiliser nos services, notamment :`}
                        </p>
                        <ul className="list-disc ml-10">
                            <li>
                                {language === 'EN'
                                    ? `Send and receive money to and from other Wallet accounts.`
                                    : `Envoyer et recevoir de l’argent vers et depuis d’autres comptes Wallet.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `Make payments to merchants and service providers.`
                                    : `Effectuer des paiements à des marchands et prestataires de services.`}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? `View and manage your account, including transaction history and security settings.`
                                    : `Consulter et gérer votre compte, y compris l’historique des transactions et les paramètres de sécurité.`}
                            </li>
                        </ul>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `ELIGIBILITY OF THE SERVICE`
                            : `ÉLIGIBILITÉ DU SERVICE`}
                    </li>

                    {/** Content */}
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN'
                                ? 'A - Age and Ability'
                                : 'A - Âge et capacité'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'You must be at least 18 years old to create an account and use RAPIDE APP. You must be able to enter into a legally binding contract in accordance with applicable law.'
                                : 'Vous devez avoir au moins 18 ans pour créer un compte et utiliser RAPIDE APP. Vous devez être en mesure de conclure un contrat juridiquement contraignant conformément à la législation en vigueur.'}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN'
                                ? 'B - Identity verification (KYC)'
                                : "B - Vérification d'identité (KYC)"}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'When creating your account, RAPIDE APP or its authorized partners may ask you for information about yourself. This procedure aims to:'
                                : 'Lors de la création de votre compte, RAPIDE APP ou ses partenaires autorisés peuvent vous demander des informations sur vous. Cette procédure vise à :'}
                        </p>
                        <ul className="list-disc ml-20">
                            {language === 'EN' ? (
                                <>
                                    <li>Verify your identity;</li>
                                    <li>
                                        Comply with legal and regulatory
                                        obligations;
                                    </li>
                                    <li>
                                        Ensure the follow-up of transactions;
                                    </li>
                                    <li>
                                        To ensure the owner of the
                                        appropriations deposited.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>Vérifier votre identité ;</li>
                                    <li>
                                        Respecter les obligations légales et
                                        réglementaires ;
                                    </li>
                                    <li>Assurer le suivi des transactions ;</li>
                                    <li>
                                        Assurer du propriétaire des crédits
                                        déposés.
                                    </li>
                                </>
                            )}
                        </ul>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'Until all the required information is provided and validated, your account cannot be activated.'
                                : 'Tant que toutes les informations requises ne sont pas fournies et validées, votre compte ne pourra pas être activé.'}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN'
                                ? 'C - Restrictions'
                                : 'C - Restrictions'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? "You can't:"
                                : 'Vous ne pouvez pas :'}
                        </p>
                        <ul className="list-disc ml-20">
                            {language === 'EN' ? (
                                <>
                                    <li>
                                        Open more than one Wallet without our
                                        explicit consent;
                                    </li>
                                    <li>
                                        Open a new account if your previous
                                        account was closed for violating the
                                        terms;
                                    </li>
                                    <li>
                                        Use another user's wallet to make
                                        transactions.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        Ouvrir plus d'un Wallet sans notre
                                        accord explicite ;
                                    </li>
                                    <li>
                                        Ouvrir un nouveau compte si votre
                                        précédent compte a été fermé pour
                                        violation des conditions ;
                                    </li>
                                    <li>
                                        Utiliser le wallet d’un autre
                                        utilisateur pour effectuer des
                                        transactions.
                                    </li>
                                </>
                            )}
                        </ul>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'If an account is opened or used in violation of these terms, RAPIDE APP reserves the right to suspend or close it.'
                                : 'Si un compte est ouvert ou utilisé en violation de ces conditions, RAPIDE APP se réserve le droit de le suspendre ou de le fermer.'}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN'
                                ? 'D - Updating information'
                                : 'D - Mise à jour des informations'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'You must inform us of any changes to your personal data. In the event of incorrect data, we may ask you for updates or correction.'
                                : 'Vous devez nous informer de tout changement dans vos données personnelles. En cas de données incorrectes, nous pouvons vous demander des mises à jour ou rectification.'}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN'
                                ? 'E - Multiple Accounts'
                                : 'E - Multiples Comptes'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'A user can only have one active account. In the event of multiple accounts being detected, we reserve the right to merge them and then close one of them.'
                                : "Un utilisateur ne peut posséder qu'un seul compte actif. En cas de multiples comptes détectés, nous nous réservons le droit de les fusionner puis de clore l'un d'entre eux."}
                        </p>
                        <br />
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `PAYMENT FOR THE SERVICE`
                            : `PAIEMENT DU SERVICE`}
                    </li>

                    {/** Content */}
                    <div className="ml-10">
                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN' ? 'A - Fees' : 'A - Frais'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'Transactions made by Wallet are free of any fees, however, in case of any fees, RAPIDE APP will inform users at least 1 month in advance.'
                                : 'Les transactions effectuées par Wallet sont libres de tout frais, néanmoins en cas de mise en place de frais, RAPIDE APP informera les utilisateurs au moins 1 mois à l’avance.'}
                        </p>
                        <br />

                        <h3 className="font-bold text-xl text-[#0c0]">
                            {language === 'EN' ? 'B - Payment' : 'B - Paiement'}
                        </h3>
                        <p className="ml-10">
                            {language === 'EN'
                                ? 'The payment of goods and services on RAPIDE APP is free of charge. In case of failure, check your balance and then try again. If necessary, please contact customer service.'
                                : 'Le paiement des biens et services sur RAPIDE APP se fait gratuitement. En cas d’échec, vérifiez votre solde puis réessayez. En cas de besoin, prière de contacter le service client.'}
                        </p>
                        <br />
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `IMPORTANT RESTRICTIONS ON THE SERVICE`
                            : `RESTRICTIONS IMPORTANTES DU SERVICE`}
                    </li>

                    {/** Content */}
                    <div className="">
                        <p className="">
                            {language === 'EN'
                                ? "We may refuse or limit any transaction. You can't use the Wallet to:"
                                : 'Nous pouvons refuser ou limiter toute transaction. Vous ne pouvez pas utiliser le Wallet pour :'}
                        </p>
                        <ul className="list-disc ml-10">
                            {language === 'EN' ? (
                                <>
                                    <li>
                                        Committing fraud or any illegal act.
                                    </li>
                                    <li>
                                        Negatively affect our ability to provide
                                        our services.
                                    </li>
                                    <li>Use an account that is not yours.</li>
                                    <li>Bypass usage restrictions.</li>
                                    <li>
                                        Speculate on foreign currencies or
                                        exploit market spreads.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        Commettre une fraude ou tout acte
                                        illégal.
                                    </li>
                                    <li>
                                        Affecter négativement notre capacité à
                                        fournir nos services.
                                    </li>
                                    <li>
                                        Utiliser un compte qui n'est pas le
                                        vôtre.
                                    </li>
                                    <li>
                                        Contourner les restrictions
                                        d'utilisation.
                                    </li>
                                    <li>
                                        Spéculer sur les devises étrangères ou
                                        exploiter des écarts de marché.
                                    </li>
                                </>
                            )}
                        </ul>
                        <br />

                        <p className="">
                            {language === 'EN'
                                ? 'We prohibit transactions related to:'
                                : 'Nous interdisons les transactions liées à :'}
                        </p>
                        <ul className="list-disc ml-10">
                            {language === 'EN' ? (
                                <>
                                    <li>Sexual content or services.</li>
                                    <li>Games of chance.</li>
                                    <li>
                                        Fraud, money laundering, terrorist
                                        financing.
                                    </li>
                                    <li>
                                        Sale of prohibited products, firearms,
                                        regulated drugs.
                                    </li>
                                    <li>
                                        Any product or service that is contrary
                                        to the law and morality.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        Contenus ou services à caractère sexuel.
                                    </li>
                                    <li>Jeux de hasard.</li>
                                    <li>
                                        Fraude, blanchiment d'argent,
                                        financement du terrorisme.
                                    </li>
                                    <li>
                                        Vente de produits prohibés, d'armes à
                                        feu, de médicaments réglementés.
                                    </li>
                                    <li>
                                        Tout produit ou service contraire à la
                                        loi et à la morale.
                                    </li>
                                </>
                            )}
                        </ul>
                        <br />

                        <p className="">
                            {language === 'EN'
                                ? 'If we detect illegal activity, we will report it to the competent authorities in accordance with the confidentiality rules necessary for this type of information.'
                                : 'Si nous détectons une activité illégale, nous la signalerons aux autorités compétentes dans le respect des règles de confidentialité nécessaires à ce type d’information.'}
                        </p>
                        <br />
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `COLLECTION AND USE OF PERSONAL DATA`
                            : `COLLECTE ET UTILISATION DES DONNÉES PERSONNELLES`}
                    </li>
                    <div>
                        <p className="">
                            {language === 'EN'
                                ? `We need to collect certain information to provide our services to you. For more details, see our Privacy Policy.`
                                : `Nous devons collecter certaines informations pour vous fournir nos services. Pour plus de détails, consultez notre Politique de Confidentialité.`}
                        </p>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `ERROR RESOLUTION, CANCELLATION AND REFUNDS`
                            : `RÉSOLUTION DES ERREURS, ANNULATION ET REMBOURSEMENTS`}
                    </li>
                    <div>
                        <ul className="list-disc ml-10">
                            {language === 'EN' ? (
                                <>
                                    <li>
                                        Error Resolution : Contact us via the
                                        RAPIDE APP.
                                    </li>
                                    <li>
                                        Cancellation : Possible before the
                                        transaction is finalized. Once
                                        completed, no refund will be made.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        Résolution des erreurs : Contactez-nous
                                        via l'application RAPIDE APP.
                                    </li>
                                    <li>
                                        Annulation : Possible avant finalisation
                                        de la transaction. Une fois complétée,
                                        aucun remboursement ne sera effectué.
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `PAYMENT DEADLINES AND EXECUTION`
                            : `DÉLAIS ET EXÉCUTION DES PAIEMENTS`}
                    </li>
                    <div className="">
                        <p>
                            {language === 'EN'
                                ? `Payments via the Wallet are instantaneous. `
                                : `Les paiements via le Wallet sont instantanés. `}
                        </p>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `UNAUTHORIZED TRANSACTIONS AND PAYMENTS`
                            : `TRANSACTIONS ET PAIEMENTS NON AUTORISÉS`}
                    </li>
                    {/**content */}
                    <div className="">
                        <p className="">
                            {language === 'EN'
                                ? 'If you detect a fraudulent transaction, report it within 30 days via the app. A refund is possible if:'
                                : "Si vous détectez une transaction frauduleuse, signalez-le sous 30 jours via l'application. Un remboursement est possible si :"}
                        </p>
                        <ul className="list-disc pl-5 ml-10">
                            {language === 'EN' ? (
                                <>
                                    <li>
                                        The transaction is the result of a
                                        RAPIDE APP error.
                                    </li>
                                    <li>
                                        It was carried out after a report of
                                        theft or compromise to RAPIDE APP with a
                                        declaration of loss in support.
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        La transaction résulte d'une erreur de
                                        RAPIDE APP.
                                    </li>
                                    <li>
                                        Elle a été effectuée après signalement
                                        d'un vol ou d'une compromission auprès
                                        de RAPIDE APP avec déclaration de perte
                                        à l’appui.
                                    </li>
                                </>
                            )}
                        </ul>
                        <br />
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `ERRONEOUS OR UNINTENTIONAL TRANSFER`
                            : `TRANFERT ERRONE OU NON VOLONTAIRE`}
                    </li>
                    <div>
                        <div className="">
                            <p className="">
                                {language === 'EN'
                                    ? "Wallet transactions require the insertion of the customer's password and then confirmation by OTP."
                                    : 'Les transactions wallet nécessitent l’insertion du mot de passe du client puis une confirmation par OTP.'}
                            </p>
                            <br />

                            <p className="">
                                {language === 'EN'
                                    ? "Therefore, payments can only be made in possession of the user's phone and password. RAPIDE APP cannot be held responsible for the transmission of this information or the provision of the user's phone to a third party. No refunds on this basis will be made by the app."
                                    : 'Par conséquent, les paiements ne peuvent être réalisés qu’en possession du téléphone de l’utilisateur et de son mot de passe. RAPIDE APP ne peut être tenu responsable de la transmission de ces informations ou de la mise à disposition du téléphone de l’utilisateur à un tiers. Aucun remboursement sur cette base ne sera effectué par l’application.'}
                            </p>
                            <br />

                            <p className="">
                                {language === 'EN'
                                    ? 'In addition, the user is responsible for verifying the identity of the person or entity to whom the transfer will be made. No refunds due to the wrong recipient will be made by the app.'
                                    : 'Par ailleurs, l’utilisateur est responsable de la vérification de l’identité de la personne ou entité à qui le transfert sera effectué. Aucun remboursement pour cause de destinataire erroné ne sera effectué par l’application.'}
                            </p>
                            <br />

                            <p className="">
                                {language === 'EN'
                                    ? 'The user, by using the Wallet service of RAPIDE APP, expressly accepts the terms of this clause and will not be able to claim any refund or compensation from the application except in the terms of article 9.'
                                    : 'L’utilisateur en utilisant le service Wallet de RAPIDE APP accepte expressément les conditions de la présente clause et ne pourra prétendre à aucun remboursement ou dédommagement de la part de l’application sauf dans les termes de l’article 9.'}
                            </p>
                            <br />
                        </div>
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `ACCOUNT RESTRICTIONS AND SUSPENSION`
                            : `RESTRICTIONS ET SUSPENSION DE COMPTE`}
                    </li>
                    <div className="">
                        <p className="">
                            {language === 'EN'
                                ? 'We may suspend or close your account for:'
                                : 'Nous pouvons suspendre ou fermer votre compte pour :'}
                        </p>
                        <ul className="ml-10 list-disc">
                            <li>
                                {language === 'EN'
                                    ? 'Suspicion of fraud.'
                                    : 'Soupçon de fraude.'}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? 'Incorrect or misleading information.'
                                    : 'Informations incorrectes ou mensongères.'}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? 'Violation of these Terms.'
                                    : 'Violation des présentes conditions.'}
                            </li>
                            <li>
                                {language === 'EN'
                                    ? 'Activities harmful to Wallet.'
                                    : 'Activités nuisibles au Wallet.'}
                            </li>
                        </ul>
                        <br />
                    </div>

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        {language === 'EN'
                            ? `SERVICE INTERRUPTIONS`
                            : `INTERRUPTIONS DE SERVICE`}
                    </li>
                    <div className="">
                        <p>
                            {language === 'EN'
                                ? `We do not guarantee the continuous availability of our services. Someunforeseen situations may impact the operation of the Wallet.`
                                : `Nous ne garantissons pas une disponibilité continue de nos services. Certaines situations imprévues peuvent impacter le fonctionnement du Wallet.`}
                        </p>
                    </div>
                    <br />

                    <li className="font-bold text-2xl ml-9 text-[#0c0]">
                        CONTACT
                    </li>
                    <div className="">
                        <p>
                            {language === 'EN'
                                ? `For any questions or assistance, please contact us via the RAPIDE APP app.`
                                : `Pour toute question ou assistance, veuillez nous contacter via l'application RAPIDE APP.`}
                        </p>
                    </div>
                    <br />
                </ol>
            </div>

            {/* Politique de protection des données à caractère personnel */}
            <div className="py-2 px-10" id="policy">
                <h1 className="text-4xl font-bold text-[#0c0]">
                    {language === 'EN'
                        ? `Personal data protection policy`
                        : `Politique de protection des données à caractère personnel`}
                </h1>
                <br />
                <br />

                <p>
                    {language === 'EN'
                        ? `This personal data protection policy sets out how user data is processed in the context of the Rapide APP application.`
                        : `Cette politique de protection des données à caractère personnel fixe la manière dont les données des utilisateurs sont traitées dans le cadre de l’application Rapide APP.`}
                </p>
                <br />
                <p>
                    {language === 'EN'
                        ? `RAPIDE APP undertakes to scrupulously respect and apply the obligations of Law No. 2014-038 of January 9, 2015 on the protection of personal data in force in Madagascar, as well as the ethical principles that result from it, with regard to the personal information that you may be required to communicate to it and agree to communicate to it, when browsing its website and using its mobile applications.`
                        : `RAPIDE APP s’engage à respecter scrupuleusement et appliquer les obligations de la Loi n°2014-038 du 09 janvier 2015 sur la protection des données à caractère personnel en vigueur à Madagascar, ainsi que les principes déontologiques qui en découlent, quant aux informations personnelles que vous pouvez être amené et consentez à lui communiquer, à l’occasion de votre navigation sur son site Internet et de l’utilisation de ses applications mobiles.`}
                </p>
                <br />
                <p>
                    {language === 'EN'
                        ? `Users of this application are likely to communicate personal data concerning them using the various collection media, tools and services made available to them on the site:`
                        : `Les utilisateurs de la présente application sont susceptibles de communiquer des données à caractère personnel les concernant en utilisant les différents supports de collecte, outils et services mis à leur disposition sur le site :`}
                </p>
                <ul className="list-disc ml-10">
                    <li>
                        {language === 'EN'
                            ? `Information collection form,`
                            : `Formulaire de collecte d’informations,`}
                    </li>
                    <li>Cookies</li>
                </ul>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Controller and purposes`
                        : `Responsable du traitement et finalités`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `The personal data collected via the application is collected by RAPIDE APP, the publisher of the site and acting as the data controller, except when it is expressly mentioned on the data collection medium that the data controller is a third party.`
                        : `Les données à caractère personnel collectées via l’application le sont par RAPIDE APP, éditeur du site et agissant en qualité de responsable du traitement, sauf lorsqu’il sera expressément mentionné sur le support de collecte des données que le responsable de traitement est un tiers.`}
                </p>
                <br />
                <p>
                    {language === 'EN'
                        ? `In the context of the use of the site and its services, the personal data you provide are collected and processed by RAPIDE APP to provide the passenger transport service, to perform our legal and contractual obligations or to satisfy the pursuit of the legitimate interest of the site publisher or a third party without infringing the rights of the user.`
                        : `Dans le cadre de l’utilisation du site et de ses services, les données à caractère personnel que vous communiquez sont collectées et traitées par RAPIDE APP pour fournir le service de transport de personnes, exécuter nos obligations légales et contractuelles ou satisfaire la poursuite de l’intérêt légitime de l’éditeur du site ou d’un tiers sans méconnaître les droits de l’utilisateur.`}
                </p>
                <br />
                <p>
                    {language === 'EN'
                        ? `On the legal basis of legitimate interest or consent, as the case may be, the data may be processed for commercial prospecting purposes, subject to compliance with the applicable regulations in this area (right to object for direct marketing by post and telephone – prior consent for direct marketing carried out by electronic means). In addition, the cookies present on the site are intended to allow the proper functioning of the site, to measure the site's audience and also to be able to personalize your experience.`
                        : `Sur le fondement juridique de l’intérêt légitime ou du consentement selon le cas, les données sont susceptibles d’être traitées à des fins de prospection commerciale, sous réserve du respect de la réglementation applicable en la matière (droit d’opposition pour la prospection par voie postale et téléphonique – consentement préalable pour la prospection réalisée par voie électronique). Par ailleurs, les cookies présents sur le site ont pour finalité de permettre le bon fonctionnement du site, de mesurer l’audience du site et également de pouvoir personnaliser votre parcours.`}
                </p>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Customer Rental Information`
                        : `Informations sur la location du client`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `When ordering rides and during journeys, the application collects your location in real time in order to allow exact monitoring of the situation of the journey, the monitoring of journeys and the drop-off locations. Location tracking will stop when you end using the app. `
                        : `Lors des commandes de courses et durant les trajets, l’application collecte en temps réel votre localisation afin de permettre un suivi exact de la situation de la course, le suivi des trajets et les lieux de dépôt. Le suivi de la localisation s’arrêtera à la fin de l’utilisation de l’application. `}
                </p>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Usage and data collection characteristics`
                        : `Caractéristiques sur l’usage et la collecte de données`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `You don't have to answer every question you're asked. The mandatory nature of the communication of information is indicated by the presence of an asterisk. Failure to provide this data will result in the impossibility for RAPIDE APP to process your request or for you to be able to use the tool or service.`
                        : `Vous n’êtes pas obligé de répondre à toutes les questions qui vous sont posées. Le caractère obligatoire de la communication des informations est indiqué par la présence d’un astérisque. Le défaut de communication de ces données aura pour conséquence l’impossibilité pour RAPIDE APP de traiter votre demande ou pour vous de pouvoir utiliser l’outil ou le service.`}
                </p>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Data retention period`
                        : `Durée de conservation des données`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `The Client's personal data is kept and processed for the time necessary to achieve the purpose pursued and to meet the company's legal obligations.`
                        : `Les données personnelles du Client sont conservées et traitées pour la durée nécessaire à la réalisation de la finalité poursuivie et pour répondre aux obligations légales de la société.`}
                </p>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `How to exercise your rights`
                        : `Modalités d’exercice de vos droits`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `You have rights over the personal data concerning you that we collect and process in the context of your use of the site, its services and your requests. These rights are as follows:`
                        : `Vous disposez de droits sur les données personnelles vous concernant que nous collectons et traitons dans le cadre de votre utilisation du site, de ses services et de vos demandes. Ces droits sont les suivants :`}
                </p>
                <ul className="list-disc ml-10">
                    <li>
                        {language === 'EN'
                            ? `Right of access, rectification and erasure of data (inaccurate, incomplete, ambiguous, or outdated);`
                            : `Droit d’accès, de rectification et d’effacement des données (inexactes, incomplètes, équivoques, ou périmées) ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Right to object to the processing of your data at any time in the context of commercial prospecting;`
                            : `Droit d’opposition au traitement de vos données à tout moment dans le cadre de la prospection commerciale ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Right to limit the processing of your data under the conditions provided for by the regulations;`
                            : `Droit à la limitation du traitement de vos données dans les conditions prévues par la réglementation ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Right to data portability;`
                            : `Droit à la portabilité des données ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Right to withdraw your consent at any time.`
                            : `Droit de retirer votre consentement à tout moment.`}
                    </li>
                </ul>
                <br />
                <p>
                    {language === 'EN'
                        ? `Vous pouvez exercer ces droits en écrivant par lettre simple à RAPIDE APP éditeur du site, dont l’adresse est la suivante : contact@rapide.mg ou par email à l’adresse LOT IVT TSARAMASAY ANTANANARIVO 101.`
                        : `You can exercise these rights by writing by simple letter to RAPIDE APP, the publisher of the site, whose address is as follows: contact@rapide.mg or by email at LOT IVT TSARAMASAY ANTANANARIVO 101.`}
                </p>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Recipients of the data`
                        : `Destinataires des données`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `Your personal data may be communicated to:`
                        : `Vos données à caractère personnel sont susceptibles d’être communiquées à :`}
                </p>
                <ul className="list-disc ml-10">
                    <li>
                        {language === 'EN'
                            ? `Our subcontractors for the sole purposes of the subcontracting;`
                            : `Nos sous-traitants pour les seuls besoins de la sous-traitance ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Our partners to enable you to benefit from the benefits of these partnerships;`
                            : `Nos partenaires pour vous permettre de bénéficier des avantages de ces partenariats ;`}
                    </li>
                    <li>
                        {language === 'EN'
                            ? `Representatives of the administration at the request of the latter.`
                            : `Des représentants de l’administration sur requête de celles-ci.`}
                    </li>
                </ul>
                <br />
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN'
                        ? `Use of your data for direct marketing purposes`
                        : `Utilisation de vos données à des fins de prospection`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `In accordance with the applicable regulations, any prospecting by automated calling, e-mail, SMS/MMS or fax, as well as any transfer or rental of data for prospecting purposes using these means, will only be carried out with the prior consent of the user concerned.`
                        : `Conformément à la réglementation applicable, toute prospection par automate d’appel, courrier électronique, sms/mms ou fax, ainsi que toute cession ou location des données à des fins de prospection utilisant ces moyens, ne seront réalisées qu’avec le consentement préalable de l’utilisateur concerné.`}
                </p>
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">Cookies</h2>
                <p>
                    {language === 'EN'
                        ? `When you visit our website, information relating to your browsing may be recorded in "Cookies" files installed on your terminal, subject to the choices made regarding cookies and which you can modify at any time.`
                        : `Lors de la consultation de notre site internet, des informations relatives à votre navigation sont susceptibles d’être enregistrées dans des fichiers “Cookies” installés sur votre terminal sous réserve des choix exprimés concernant les cookies et que vous pouvez modifier à tout moment.`}
                </p>
                <br />

                <h2 className="font-bold text-2xl text-[#0c0]">
                    {language === 'EN' ? `Security` : `Sécurité`}
                </h2>
                <p>
                    {language === 'EN'
                        ? `Our concern is to preserve the quality and integrity of your personal data. Our concern is to preserve the quality and integrity of your personal data. The technologies and security policies applied help protect your personal data from unauthorized access or misuse. The various persons who have access to the data are required to respect the privacy of the users of this site and the confidentiality of their data.`
                        : `Notre préoccupation est de préserver la qualité et l’intégrité de vos données à caractère personnel. Notre préoccupation est de préserver la qualité et l’intégrité de vos données à caractère personnel. Les technologies et les politiques de sécurité appliquées permettent de protéger vos données à caractère personnel contre tout accès non autorisé, toute utilisation impropre. Les différentes personnes qui ont accès aux données sont tenues de respecter la vie privée des utilisateurs du présent site et la confidentialité de leurs données.`}
                </p>
                <br />
                <p>
                    {language === 'EN'
                        ? `We will never ask you by email to log in to your online banking or to provide us with confidential data (credit card number, code, etc.).`
                        : `Nous ne vous demanderons jamais par email de vous connecter à votre banque en ligne ou de nous fournir des données à caractères confidentielles (numéro de carte bancaire, code…).`}
                </p>
            </div>

            {/** Footer */}
            <div className="bg-[#0c0] p-5 text-white bg-image mt-5">
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="mb-10">
                        <div className="my-3">
                            <img
                                src={rapideLogo}
                                alt="rapide-logo"
                                width={150}
                                className="cursor-pointer"
                            />
                        </div>
                        <p>
                            {language === 'EN'
                                ? `Want simple and quick transportation? With Rapide App, book your ride in just a few clicks and enjoy a reliable service at any time. Download the app now!`
                                : `Envie de déplacements simples et rapides ? Avec Rapide App, réservez votre trajet en quelques clics et profitez d’un service fiable à tout moment. Téléchargez l’application dès maintenant !`}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2">
                        <div className="flex flex-col gap-3 mb-10">
                            <h2 className="text-2xl font-bold">Menu</h2>
                            <a href="#term-conditions" className="">
                                {language === 'EN'
                                    ? 'Terms and Conditions'
                                    : 'Conditions Générales d’Utilisation'}
                            </a>
                            <a href="#term-rapide-wallet" className="">
                                Rapide Wallet
                            </a>
                            <a href="#policy" className="">
                                {language === 'EN'
                                    ? 'Privacy policy'
                                    : 'Politique de confidentialité'}
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-bold">Contact</h2>
                            <div className="flex items-center gap-3">
                                <SiGmail size={18} />
                                <a href="mailto:contact@rapide.mg">
                                    contact@rapide.mg
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt size={18} />
                                <span>+261 38 32 684 15</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaFacebook size={18} />
                                <a
                                    href="https://www.facebook.com/profile.php?id=61574903333284"
                                    target="_blank"
                                >
                                    Rapide App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-[#0c0] p-5 border-t border-[#ffffff4a] text-white font-bold">
                © 2025 Rapide App - All rights reserved
            </div>
        </>
    )
}

export default Term
