import Head from "next/head";
import RootLayout from "../layout";
import { useRouter } from "next/router";
import { ROUTES } from '@/app/routes/routes'

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = typeof window !== "undefined" ? useRouter(): {pathname: ROUTES.default};
  // const titleRoutes

  return (
    <RootLayout>
      <span className="text-black text-xl">sfdsfs</span>
      <footer className="bg-black text-white text-center py-4">Footer</footer>
    </RootLayout>
  )
}