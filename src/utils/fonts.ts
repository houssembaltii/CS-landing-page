import localFont from "next/font/local";
import { Roboto_Slab } from "next/font/google";

const ThrashTalkFont = localFont({
  src: "./../fonts/TrashHand.ttf",
  variable: "--font-thrashtalk",
  weight: "900",
});
const Roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-roboto",
});
export { ThrashTalkFont, Roboto_slab };
