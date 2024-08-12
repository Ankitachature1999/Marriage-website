import { useState, useEffect, useRef } from "react";
import "./Stepper.css";

function CheckoutStepper({ stepsConfig = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length === stepsConfig.length) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
      });
    }
  }, [stepsConfig.length]);

  if (!stepsConfig.length) {
    return null;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  // Adjusted the calculation to reflect progress correctly
  const calculateProgressBar = () => {
    // Progress is based on steps completed, not current step index
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component || null;

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step ${
              currentStep > index + 1 || isComplete ? "complete" : ""
            } ${currentStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="stepper-name">{step.name}</div>
          </div>
        ))}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBar()}%` }}
          ></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default CheckoutStepper;
