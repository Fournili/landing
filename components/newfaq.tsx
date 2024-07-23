import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion defaultExpandedKeys={["theme"]}>
      <AccordionItem className="bg-white"
        key="theme"
        aria-label="Theme"
        indicator={({ isOpen }) => (isOpen ? "-" : "+" )}
        title="Theme"
      >
        {defaultContent}
      </AccordionItem >
      <AccordionItem className="bg-white"
        key="anchor"
        aria-label="Anchor"
        title="Anchor"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem className="bg-white"
        key="sun"
        aria-label="Sun"
        title="Sun"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
