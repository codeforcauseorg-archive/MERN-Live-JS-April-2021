import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Uploader from "./Uploader";
import PostDescription from "./PostDescription";
import VerifyPostInfo from "./VerifyPostInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function InstaAddStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    ["Upload Image", Uploader],
    ["Add Details", PostDescription],
    ["Submit", VerifyPostInfo],
  ];

  let handleNext = () => {
    setActiveStep((step) => {
      if (step < steps.length) {
        return step + 1;
      }
    });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(([label, Component], index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <Component setActiveStep={setActiveStep} />
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
