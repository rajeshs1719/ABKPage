import React from "react";
import LandingPage from "./herooflandingPage"; // Adjusted to match your component file name
import Books from "./Books/books";
import Appreciation from "./Appreciation/appreciation";
import FAQ from "./FAQ/faq";
import WhatsAppCommunityCard from "./WhatsAppCommunityCard";

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