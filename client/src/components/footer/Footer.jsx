import React from 'react';

export const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full text-center py-6 bg-[#f5f5f5]">
            {/* Footer Title */}

            {/* Footer Copyright */}
            <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} JULIE JONES. All rights reserved.
            </p>
        </footer>
    );
};
