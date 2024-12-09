import Link from "next/link";
export const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link></li>
                        <li><Link href="#projects" className="text-gray-600 hover:text-gray-800">Projects</Link></li>
                        <li><Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};