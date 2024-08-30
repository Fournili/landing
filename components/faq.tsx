import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from "react-i18next";

interface AccordionItem {
  question: string;
  answer: string;
}

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(0deg)',
    transition: 'transform 0.2s',
    fontSize: '24px', 
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)', 
  },
}));

const FourniliFAQ: React.FC = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData: AccordionItem[] = [
    { question: t('FAQs.Do my suppliers need to be on Fournili?'), answer: t('FAQs.answer1') },
    { question: t('FAQs.How much does Fournili cost?'), answer: t('FAQs.answer2') },
    { question: t('FAQs.What is Fournili?'), answer: t('FAQs.answer3') },
    { question: t('FAQs.Who is Fournili for?'), answer: t('FAQs.answer4') },
  ];

  return (
    <section id="FAQ" className="self-stretch flex flex-col items-center justify-start py-16 px-4 max-w-full text-center">
      <div style={{ 
        border: '12px solid rgb(230, 32, 66)',  
        borderRadius: '8px', 
        padding: '40px 40px', 
        width: '85vw',             
        boxSizing: 'border-box',   
        display: 'flex',           
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',   
        margin: 'auto',            
        fontFamily: 'Circular Std, sans-serif', 
      }}>
        {/* Title */}
        <Typography variant="h4" className="leading-[58px] font-medium font-inherit inline-block mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]" 
        style={{ marginBottom: '24px', fontFamily: 'Circular Std, sans-serif', }}
          >
          FAQs
        </Typography>

        <div style={{ width: '100%' }}>
          {accordionData.map((item, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
              style={{ 
                backgroundColor: 'white', 
                boxShadow: 'none',        
                fontFamily: 'Circular Std, sans-serif', 
              }}
            >
              <CustomAccordionSummary
                expandIcon={
                  <span style={{ 
                    color: 'black', 
                    fontWeight: 'bold', 
                    transform: 'rotate(0deg)' 
                  }}>
                    +
                  </span>
                }  // Custom icon for accordion
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
                style={{ 
                  padding: '0',  
                  minHeight: '0', 
                  fontFamily: 'Circular Std, sans-serif', 
                }}
              >
                <Typography style={{ 
                  color: 'black', 
                  textAlign: 'left', 
                  fontWeight: '500', 
                  fontSize: '24px', 
                  padding: '12px 0', 
                  fontFamily: 'Circular Std, sans-serif', 
                }}>
                  {item.question}
                </Typography>
              </CustomAccordionSummary>
              <AccordionDetails 
                style={{ 
                  padding: '0 0 12px 0', 
                  flexGrow: 1, 
                  fontFamily: 'Poppins, sans-serif',  // Updated font
                  fontWeight: '300',  // Light font weight
                }}>
                <Typography style={{ 
                  color: 'black', 
                  textAlign: 'left',  // Align text to the left
                  fontSize: '20px', 
                  fontWeight: '300',  // Light font weight
                  fontFamily: 'Poppins, sans-serif',  // Updated font
                }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourniliFAQ;






