export const ContactSection = () => {
    return (
        <section id="contact" className="py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
            <form className="bg-white shadow rounded-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea className="w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
            </form>
        </section>
    );
};
