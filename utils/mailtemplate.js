export const mailTemplate = (data) => {
  const {
    companyName,
    email,
    logo,
    industry,
    marketCap,
    consultationFocus,
    companyStage,
    partnershipFocus,
    timeFrameForResult,
    consultationLength,
    followUpSupport,
    additionalInformation,
  } = data;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
      text-align: center;
    }
    .field-label {
      font-weight: bold;
      color: #555;
      margin-top: 10px;
    }
    .field-value {
      margin-bottom: 15px;
      color: #333;
      font-size: 16px;
    }
    .divider {
      margin: 20px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      max-width: 150px;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="email-container">
  <h2>Consultation Request Details</h2>
    
  
  <!-- Logo Section -->  
    <div class="logo">
      <img src="${logo}" alt="Company Logo">
    </div>

    
    <div class="field-label">Company Name:</div>
    <div class="field-value">${companyName}</div>

    <div class="field-label">Email:</div>
    <div class="field-value">${email}</div>

    <div class="field-label">Industry:</div>
    <div class="field-value">${industry}</div>

    <div class="field-label">Market Cap:</div>
    <div class="field-value">${marketCap}</div>

    <div class="field-label">Consultation Focus:</div>
    <div class="field-value">${consultationFocus}</div>

    <div class="field-label">Company Stage:</div>
    <div class="field-value">${companyStage}</div>

    <div class="field-label">Partnership Focus:</div>
    <div class="field-value">${partnershipFocus}</div>

    <div class="field-label">Time Frame for Result:</div>
    <div class="field-value">${timeFrameForResult}</div>

    <div class="field-label">Consultation Length:</div>
    <div class="field-value">${consultationLength}</div>

    <div class="field-label">Follow-up Support:</div>
    <div class="field-value">${followUpSupport}</div>

    <div class="field-label">Additional Information:</div>
    <div class="field-value">${additionalInformation}</div>

    <div class="divider"></div>

    <p style="text-align: center; font-size: 14px; color: #999;">
      This is an automated message. Please do not reply.
    </p>
  </div>
</body>
</html>
`;
};
