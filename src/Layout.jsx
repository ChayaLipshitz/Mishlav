import React from "react";

export default function Layout({ children }) {
  return (
    <div dir="rtl" className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');

        * {
          font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        :root {
          --navy-blue: #0b3b5b;
          --mishlav-orange: #eb6e21;
        }

        body {
          font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .bg-navy-blue {
          background-color: var(--navy-blue);
        }

        .text-navy-blue {
          color: var(--navy-blue);
        }

        .border-navy-blue {
          border-color: var(--navy-blue);
        }

        .bg-mishlav-orange {
          background-color: var(--mishlav-orange);
        }

        .text-mishlav-orange {
          color: var(--mishlav-orange);
        }

        .border-mishlav-orange {
          border-color: var(--mishlav-orange);
        }

        .font-heebo {
          font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        }

        /* Add RTL support */
        .rtl {
          direction: rtl;
        }
      `}</style>
      {children}
    </div>
  );
}