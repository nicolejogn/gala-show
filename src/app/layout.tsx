import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const figtreeRegular = localFont({
  src: "/fonts/Figtree-Regular.ttf",
  variable: "--font-figtree-regular",
  weight: "400",
});

const figtreeLight = localFont({
  src: "/fonts/Figtree-Light.ttf",
  variable: "--font-figtree-light",
  weight: "300",
});

const figtreeMedium = localFont({
  src: "/fonts/Figtree-Medium.ttf",
  variable: "--font-figtree-medium",
  weight: "500",
});

const figtreeSemiBold = localFont({
  src: "/fonts/Figtree-SemiBold.ttf",
  variable: "--font-figtree-semibold",
  weight: "600",
});

const figtreeBold = localFont({
  src: "/fonts/Figtree-Bold.ttf",
  variable: "--font-figtree-bold",
  weight: "700",
});

const figtreeExtraBold = localFont({
  src: "/fonts/Figtree-ExtraBold.ttf",
  variable: "--font-figtree-extrabold",
  weight: "800",
});

const figtreeBlack = localFont({
  src: "/fonts/Figtree-Black.ttf",
  variable: "--font-figtree-black",
  weight: "900",
});

const figtreeItalic = localFont({
  src: "/fonts/Figtree-Italic.ttf",
  variable: "--font-figtree-italic",
  weight: "400",
  style: "italic",
});

const figtreeLightItalic = localFont({
  src: "/fonts/Figtree-LightItalic.ttf",
  variable: "--font-figtree-lightitalic",
  weight: "300",
  style: "italic",
});

const figtreeMediumItalic = localFont({
  src: "/fonts/Figtree-MediumItalic.ttf",
  variable: "--font-figtree-mediumitalic",
  weight: "500",
  style: "italic",
});

const figtreeSemiBoldItalic = localFont({
  src: "/fonts/Figtree-SemiBoldItalic.ttf",
  variable: "--font-figtree-semibolditalic",
  weight: "600",
  style: "italic",
});

const figtreeBoldItalic = localFont({
  src: "/fonts/Figtree-BoldItalic.ttf",
  variable: "--font-figtree-bolditalic",
  weight: "700",
  style: "italic",
});

const figtreeExtraBoldItalic = localFont({
  src: "/fonts/Figtree-ExtraBoldItalic.ttf",
  variable: "--font-figtree-extrabolditalic",
  weight: "800",
  style: "italic",
});

const figtreeBlackItalic = localFont({
  src: "/fonts/Figtree-BlackItalic.ttf",
  variable: "--font-figtree-blackitalic",
  weight: "900",
  style: "italic",
});


export const metadata: Metadata = {
  title: "Gala games",
  description: "Gala games",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <Script id='fb-pixel' strategy='afterInteractive'>
        {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK}');
  fbq('track', 'PageView');
            `}
      </Script>
    </head>

    <body
      className={`${figtreeRegular.className} ${figtreeLight.variable} ${figtreeMedium.variable} ${figtreeSemiBold.variable} ${figtreeBold.variable} ${figtreeExtraBold.variable} ${figtreeBlack.variable} ${figtreeItalic.variable} ${figtreeLightItalic.variable} ${figtreeMediumItalic.variable} ${figtreeSemiBoldItalic.variable} ${figtreeBoldItalic.variable} ${figtreeExtraBoldItalic.variable} ${figtreeBlackItalic.variable} `}
    >
    {children}
    </body>
    </html>
  );
}
