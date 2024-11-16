import {NavBar} from "@/components/navbar";
import {LatestNewsSection} from "@/components/latest-news-section";
import {Footer} from "@/components/footer";
import {WalletSection} from "@/components/wallet-section";

export default function Page() {
  return (
    <div style={{position: 'relative'}}>
      <NavBar/>
      <WalletSection/>
      <LatestNewsSection/>
      <Footer/>
    </div>
  );
};
