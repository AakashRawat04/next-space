import AuthProvider from "./AuthProvider";
import NavMenu from "./NavMenu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Home",
	description: "Ashs next space",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<NavMenu />
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
