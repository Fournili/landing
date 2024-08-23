
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export type AccordionProps = {
  title: string;
  content: string;
  isOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen = false }) => {
  const [isActive, setIsActive] = useState(isOpen);

  return (
    <div className="accordion-item" style={{ marginBottom: '16px' }}>
      <div
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          padding: '10px 0',
          borderBottom: '1px solid #ccc',
        }}
      >
        <div style={{ textAlign: 'left', flexGrow: 1 }}>{title}</div>
        <div style={{ marginLeft: '20px' }}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && (
        <div
          className="accordion-content"
          style={{
            padding: '16px 0',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;


