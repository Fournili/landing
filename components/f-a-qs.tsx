import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function FAQs() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const content1 = 
    " Yes Fournili is Free ";


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
      <AccordionItem key="1" aria-label="Accordion 1" title=" How much does Fournili cost ?">
        {content1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Do my suppliers need to be on Fournili ?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}

