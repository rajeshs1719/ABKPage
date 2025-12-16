import React from "react";
import LandingPage from "./LandingPage/landingPage";
import Books from "./Books/books";
import Appreciation from "./Appreciation/appreciation";
import FAQ from "./FAQ/faq";
import WhatsAppCommunityCard from './WhatsAppCommunityCard'

export default function Home() {
  return (
    <>
      <LandingPage />
      <Books />
      <Appreciation />
      <FAQ />
      <WhatsAppCommunityCard/>
    </>
  );
}
