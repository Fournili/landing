import React, { useState } from "react";
import { CAccordion ,CAccordionItem ,CAccordionHeader,CAccordionBody} from '@coreui/react';
import { useTranslation } from "react-i18next";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (

<CAccordion flush>
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={2}>
    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem itemKey={3}>
    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
      collapse plugin adds the appropriate classes that we use to style each element. These classes
      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
      modify any of this with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
      does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>

  );
}
