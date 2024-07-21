import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQs() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  const answer1 = "No, your suppliers do not need to be on the Fournili app. You can choose from the suppliers we provide through the app or invite your own suppliers.";
  const answer2 = "Fournili is completely free to use. Yes, you read that right—absolutely free!";
  const answer3 = "Fournili is an online B2B marketplace platform that facilitates order processing and communication between restaurants and suppliers";
  const answer4 = "Any restaurant, café, cloud kitchen, catering business - basically anyone  who buys food items from suppliers and anyone who sells to restaurants. Basically anyone in the food-supply industry who wants to optimize their operations.";

  return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              Do my suppliers need to be on Fournili?
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "1" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("1")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{answer1}</div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              How much does Fournili cost?
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "2" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("2")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{answer2}</div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              What is Fournili?
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "3" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("3")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{answer3}</div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              Who is Fournili for?
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "4" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("4")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{answer4}</div>
      </AccordionItem>
    </Accordion>
  );
}
