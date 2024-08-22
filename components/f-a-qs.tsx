import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useTranslation } from "react-i18next";

export default function FAQs() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);
  const itemClasses = {
    base: "bg-secondary-100 ",
  };
  const handleToggle = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

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
              {t('FAQs.Do my suppliers need to be on Fournili?')}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "1" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item "
        onClick={() => handleToggle("1")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{t('FAQs.answer1')}</div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              {t('FAQs.How much does Fournili cost?')}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "2" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("2")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{t('FAQs.answer2')}</div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              {t('FAQs.What is Fournili?')}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "3" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("3")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{t('FAQs.answer3')}</div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
              {t('FAQs.Who is Fournili for?')}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "bold", marginLeft: "auto" }}>
              {expanded === "4" ? "-" : "+"}
            </span>
          </div>
        }
        className="custom-accordion-item"
        onClick={() => handleToggle("4")}
      >
        <div style={{ fontSize: "20px", textAlign: "center" }}>{t('FAQs.answer4')}</div>
      </AccordionItem>
    </Accordion>
  );
}

