import React from "react";

function Footer({ year, siteName, links }) {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {year} {siteName}. All rights reserved.</p>
      <p>
        Follow Timo on{' '}
        {links.map((link, idx) => (
          <span key={link.href}>
            <a
              href={link.href}
              className={link.className}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {idx === links.length - 1 ? '' : ' and '}
          </span>
        ))}
      </p>
    </footer>
  );
}

export default Footer;
