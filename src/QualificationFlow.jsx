import { useState } from 'react';

const steps = [
  "Service Request Received",
  "Draft Bid Request Created Automatically",
  "CSM Works with Customer",
  "Customer Confirms This Version?",
  "CSM Confirms All Data Ready",
  "Customer Final Approval?",
  "Submit to Bid Pool Automatically",
  "Show Confirmation with ETA + Contact Button"
];

export default function QualificationFlow() {
  const [step, setStep] = useState(0);

  const handleDecision = (decision) => {
    if (step === 3) {
      if (decision === 'no') return setStep(2);
      if (decision === 'yes') return setStep(4);
    }
    if (step === 5) {
      if (decision === 'no') return setStep(2);
      if (decision === 'yes') return setStep(6);
    }
    setStep(step + 1);
  };

  return (
    <div className="card">
      <h2>{steps[step]}</h2>
      {step === 3 || step === 5 ? (
        <div>
          <button onClick={() => handleDecision('yes')}>Yes</button>
          <button onClick={() => handleDecision('no')}>No</button>
        </div>
      ) : step < steps.length - 1 ? (
        <button onClick={() => setStep(step + 1)}>Next</button>
      ) : (
        <p>Process Complete ✅</p>
      )}
    </div>
  );
}