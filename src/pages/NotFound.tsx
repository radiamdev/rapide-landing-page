import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
            <h1 className="text-6xl font-bold text-green-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page non trouvée</h2>
            <p className="text-gray-600 mb-6">
                La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Link
                to="/"
                className="bg-green-primary text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
                Retour à l'accueil
            </Link>
        </div>
    )
}
