import type { NextPage } from "next";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";

export type FAQsType = {
  className?: string;
  doMySuppliersNeedToBeOnFo?: string;
  icroundPlus?: string;
};

const FAQs: NextPage<FAQsType> = ({
  className = "",
  doMySuppliersNeedToBeOnFo,
  icroundPlus,
}) => {
  return (
    <Accordion className={`self-stretch max-w-full ${className}`}>
      <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
        <Typography />
      </AccordionSummary>
      <AccordionDetails>
        <Typography>dfdfdfdfd</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQs;
