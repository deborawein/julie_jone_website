import React from 'react';

export const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full text-center py-6 bg-[#f5f5f5]">
            {/* Footer Title */}
            <h2 className="text-3xl md:text-5xl text-black font-hargita">JULIE JONES</h2>

            {/* Footer Copyright */}
            <p className="text-xs text-gray-500 mt-4">
                © {new Date().getFullYear()} JULIE JONES. All rights reserved.
            </p>
        </footer>
    );
};
