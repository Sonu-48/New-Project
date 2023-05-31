import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, styled, Grid } from "@mui/material";

export default function Preico() {
  const [expanded, setExpanded] = React.useState(false);
  const [expended2, setExpanded2] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (pane2) => (event, isExpanded) => {
    setExpanded2(isExpanded ? pane2 : false);
  };

  const Wrapperbox = styled("div")({
    "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
      background: "transparent !important",
      border: "1px solid #fff",
    },
    "& svg": {
      color: "#fff",
    },
    "& h3":{
        fontSize:'17px'
    },
    "& p":{
        lineHeight:'30px',
    }
  });

  return (
    <Wrapperbox>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography variant="h3">
                    Q. What is Cryptocurrency?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A. The best cryptocurrency to buy is one we are willing to
                    hold onto even if it goes down. For example, I believe in
                    Steem enough that I am willing to hold it even if it goes
                    down 99% and would start buying more of it if the price
                    dropped.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography variant="h3">
                   Q.  Which Cryptocurrency is best to buy today?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A. The best cryptocurrency to buy is one we are willing to
                    hold onto even if it goes down. For example, I believe in
                    Steem enough that I am willing to hold it even if it goes
                    down 99% and would start buying more of it if the price
                    dropped.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography variant="h3">
                   Q. How about day trading crypto?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                   A. While profits are possible trading cryptocurrencies, so are
                    losses. My first year involved me spending hundreds of hours
                    trading Bitcoin with a result of losing over $5,000 with
                    nothing to show for it. Simply trading digital currencies is
                    very similar to gambling because no one really knows what is
                    going to happen next although anyone can guess! While I was
                    lucky to do nothing expect lose money when I started, the
                    worst thing that can happen is to get lucky right away and
                    get a big ego about what an amazing cryptocurrency trader we
                    are.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography variant="h3">
                   Q. When to sell a cryptocurrency
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                   A. Before Steem I was all in an another altcoin and really
                    excited about it. When I first bought the price was low and
                    made payments to me every week just for holding it. As I
                    tried to participate in the community over the next several
                    months, I was consistently met with a mix of excitement and
                    hostility. When I began talking openly about this, the
                    negative emotions won over in the community and in me.
                    Originally I had invested and been happy to hold no matter
                    what the price which quickly went up after I bought it.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Accordion
                expanded2={expended2 === "pane15"}
                onChange={handleChange2("pane15")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="pane15bh-content"
                  id="panel5bh-header"
                >
                  <Typography variant="h3">
                    Q. How does one acquire bitcoins?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A. The best cryptocurrency to buy is one we are willing to
                    hold onto even if it goes down. For example, I believe in
                    Steem enough that I am willing to hold it even if it goes
                    down 99% and would start buying more of it if the price
                    dropped.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expanded={expended2 === "pane16"}
                onChange={handleChange2("pane16")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography variant="h3">
                    Q. Can I make money with Bitcoin ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A. You should never expect to get rich with Bitcoin or any
                    emerging technology. It is always important to be wary of
                    any thing that sounds too good to be true or disobeys basic.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expended2={expended2 === "panel7"}
                onChange={handleChange2("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography variant="h3">
                    Q. What happens when bitcoins are lost?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A. While profits are possible trading cryptocurrencies, so are
                    losses. My first year involved me spending hundreds of hours
                    trading Bitcoin with a result of losing over $5,000 with
                    nothing to show for it. Simply trading digital currencies is
                    very similar to gambling because no one really knows what is
                    going to happen next although anyone can guess! While I was
                    lucky to do nothing expect lose money when I started, the
                    worst thing that can happen is to get lucky right away and
                    get a big ego about what an amazing cryptocurrency trader we
                    are.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                expended2={expended2 === "pane18"}
                onChange={handleChange2("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                >
                  <Typography variant="h3">
                    Q. Where is the invest my bitcons?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    A.Before Steem I was all in an another altcoin and really
                    excited about it. When I first bought the price was low and
                    made payments to me every week just for holding it. As I
                    tried to participate in the community over the next several
                    months, I was consistently met with a mix of excitement and
                    hostility. When I began talking openly about this, the
                    negative emotions won over in the community and in me.
                    Originally I had invested and been happy to hold no matter
                    what the price which quickly went up after I bought it.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapperbox>
  );
}
