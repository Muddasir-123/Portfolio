import Link from "next/link";
export const Footer = ()=> {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; Mudasir,feel free to contact Me</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link href="https://github.com/Muddasir-123?tab=repositories" className="text-white hover:text-gray-400"><i className="fab fa-github"></i></Link>
                    <Link href="https://www.linkedin.com/in/mudasir-kakepoto-a573832a5?originalSubdomain=pk" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></Link>
                    <Link href="" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></Link>
                </div>
            </div>
        </footer>
    );
};