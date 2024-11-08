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
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);
  const isArabic = i18n.language === 'ar';

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
        fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std, sans-serif', 
        direction: isArabic ? 'rtl' : 'ltr',
      }}>
        {/* Title */}
        <Typography variant="h4" className="leading-[58px] font-medium font-inherit inline-block mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]" 
        style={{ 
          marginBottom: '24px', 
          fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std, sans-serif',
          textAlign: 'center',
          width: '100%',
        }}
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
                fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
              }}
            >
              <CustomAccordionSummary
                expandIcon={
                  <span style={{ 
                    color: 'black', 
                    fontWeight: 'bold', 
                    transform: 'rotate(0deg)',
                    order: isArabic ? -1 : 1,
                  }}>
                    +
                  </span>
                }
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
                style={{ 
                  padding: '0',  
                  minHeight: '0', 
                  fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std, sans-serif',
                  flexDirection: 'row',
                }}
              >
                <Typography style={{ 
                  color: 'black', 
                  textAlign: isArabic ? 'right' : 'left', 
                  fontWeight: '500', 
                  fontSize: '24px', 
                  padding: '12px 0', 
                  fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
                  width: '100%',
                  order: 0,
                }}>
                  {item.question}
                </Typography>
              </CustomAccordionSummary>
              <AccordionDetails 
                style={{ 
                  padding: '0 0 12px 0', 
                  flexGrow: 1, 
                  fontFamily: isArabic ? 'NotoKufiArabic' : 'Poppins, sans-serif',   
                  fontWeight: '300',  
                  direction: isArabic ? 'rtl' : 'ltr',  
                  textAlign: isArabic ? 'right' : 'left',  
                }}>
                <Typography style={{ 
                  color: 'black', 
                  fontSize: '20px', 
                  fontWeight: '300',  
                  fontFamily: isArabic ? 'NotoKufiArabic' : 'Poppins, sans-serif',  
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







