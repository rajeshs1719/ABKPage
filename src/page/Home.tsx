import React from "react";
import LandingPage from "./LandingPage/herooflandingPage";
import Books from "./LandingPage/Books/books";
import Appreciation from "./LandingPage/Appreciation/appreciation";
import FAQ from "./LandingPage/FAQ/faq";
import WhatsAppCommunityCard from "./LandingPage/WhatsAppCommunityCard";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Books />
      <Appreciation />
      <FAQ />
      <WhatsAppCommunityCard />
    </>
  );
}
