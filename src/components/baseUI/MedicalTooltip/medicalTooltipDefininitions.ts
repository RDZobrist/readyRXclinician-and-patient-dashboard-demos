export const medicalDefinitions: Record<string, { title: string; definition: string; normalRange?: string }> = {
    glucose: {
      title: 'Blood Glucose',
      definition: 'The amount of sugar (glucose) in your blood. Your body uses glucose for energy.',
      normalRange: 'Normal: 70-99 mg/dL (fasting)'
    },
    hba1c: {
      title: 'HbA1c (Hemoglobin A1c)',
      definition: 'Shows your average blood sugar level over the past 2-3 months. It measures how much glucose is attached to your red blood cells.',
      normalRange: 'Normal: Less than 5.7%'
    },
    cholesterol: {
      title: 'Total Cholesterol',
      definition: 'A waxy substance in your blood. Your body needs some cholesterol, but too much can increase heart disease risk.',
      normalRange: 'Desirable: Less than 200 mg/dL'
    },
    'blood-pressure': {
      title: 'Blood Pressure',
      definition: 'The force of blood pushing against your artery walls. Measured as systolic (top number) over diastolic (bottom number).',
      normalRange: 'Normal: Less than 120/80 mmHg'
    },
    triglycerides: {
      title: 'Triglycerides',
      definition: 'A type of fat in your blood. High levels can increase your risk of heart disease.',
      normalRange: 'Normal: Less than 150 mg/dL'
    },
    hdl: {
      title: 'HDL Cholesterol',
      definition: 'High-density lipoprotein, often called "good" cholesterol. It helps remove other forms of cholesterol from your bloodstream.',
      normalRange: 'Good: 40+ mg/dL (men), 50+ mg/dL (women)'
    },
    ldl: {
      title: 'LDL Cholesterol',
      definition: 'Low-density lipoprotein, often called "bad" cholesterol. High levels can build up in your arteries.',
      normalRange: 'Optimal: Less than 100 mg/dL'
    },
    creatinine: {
      title: 'Creatinine',
      definition: 'A waste product from muscle breakdown. High levels may indicate kidney problems.',
      normalRange: 'Normal: 0.6-1.2 mg/dL'
    },
    bun: {
      title: 'BUN (Blood Urea Nitrogen)',
      definition: 'A waste product filtered by your kidneys. High levels may indicate kidney or liver problems.',
      normalRange: 'Normal: 7-20 mg/dL'
    },
    egfr: {
      title: 'eGFR (Estimated Glomerular Filtration Rate)',
      definition: 'Measures how well your kidneys filter waste from your blood. Lower numbers indicate reduced kidney function.',
      normalRange: 'Normal: 90+ mL/min/1.73m²'
    },
    diabetes: {
      title: 'Diabetes',
      definition: 'A chronic condition where your body cannot properly process blood sugar (glucose). Type 2 diabetes is the most common form.',
      normalRange: 'Diagnosis: HbA1c ≥ 6.5% or fasting glucose ≥ 126 mg/dL'
    },
    hypertension: {
      title: 'Hypertension (High Blood Pressure)',
      definition: 'A condition where blood pressure is consistently elevated, putting extra strain on your heart and blood vessels.',
      normalRange: 'High: ≥ 130/80 mmHg'
    },
    bmi: {
      title: 'BMI (Body Mass Index)',
      definition: 'A measure of body fat based on height and weight. Used to assess if you are underweight, normal weight, overweight, or obese.',
      normalRange: 'Normal: 18.5-24.9 kg/m²'
    },
    weight: {
      title: 'Body Weight',
      definition: 'The measurement of body mass, an important indicator of overall health. Changes in weight can signal underlying health issues.',
      normalRange: 'Varies based on height, age, and sex. Often assessed using BMI.'
    }
  };