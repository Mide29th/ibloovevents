import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ibloov Events | Discover & Create Events",
    description: "The hyper-minimalist events platform for Nigeria. Search concerts, parties, workshops and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
