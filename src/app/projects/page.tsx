import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bounded from "@/components/bounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Projects() {
  return (
    <main className="">
      <Bounded>
        <Accordion id="card" style={{ borderRadius: "0%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Powerbot</h1>: Chorus identifier and music video aggregator
            (Python, JavaScript)
          </AccordionSummary>
          <AccordionDetails>Det 1</AccordionDetails>
        </Accordion>
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>Shaders</h1>: Low-level shader renderer (C++)
          </AccordionSummary>
          <AccordionDetails>Det 1</AccordionDetails>
        </Accordion>
        <Accordion id="card">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          >
            <h1>TheoryVis</h1>: CS theory visualizations (JavaScript)
          </AccordionSummary>
          <AccordionDetails>Det 1</AccordionDetails>
        </Accordion>
      </Bounded>
    </main>
  );
}

const PowerbotDetails = () => {
  return (
    <div className="">
      <p>Powerbot is </p>
    </div>
  );
};
