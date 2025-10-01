/**
 * Simple Mock Data - Healthcare Dashboard Demo
 * Minimal data to showcase component library architecture
 */

// Simple patient info
export const patient = {
  id: 'P001',
  name: 'Sarah Mitchell',
  age: 45,
  gender: 'Female'
};

// 5 Patients with diverse medical profiles
export const patients = [
  { 
    id: 'P001', 
    name: 'Sarah Mitchell', 
    gender: 'Female', 
    condition: 'Diabetes Type 2', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=SM', 
      dateOfBirth: '1978-03-15', 
      age: 45, 
      gender: 'female', 
      mrn: 'MRN-2024-001', 
      phone: '(555) 123-4567', 
      email: 'sarah.mitchell@email.com' 
    },
    alerts: [
      {
        id: 'alert-001',
        type: 'clinical',
        priority: 'high',
        message: 'HbA1c levels trending upward',
        date: '2023-09-15',
        acknowledged: false
      }
    ]
  },
  { 
    id: 'P002', 
    name: 'David McDonald', 
    gender: 'Male', 
    condition: 'Hypertension', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=DM', 
      dateOfBirth: '1961-08-22', 
      age: 62, 
      gender: 'male', 
      mrn: 'MRN-2024-002', 
      phone: '(555) 234-5678', 
      email: 'david.mcdonald@email.com' 
    }
  },
  { 
    id: 'P003', 
    name: 'Maria Rodriguez', 
    gender: 'Female', 
    condition: 'Hyperlipidemia', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=MR', 
      dateOfBirth: '1985-12-10', 
      age: 38, 
      gender: 'female', 
      mrn: 'MRN-2024-003', 
      phone: '(555) 345-6789', 
      email: 'maria.rodriguez@email.com' 
    }
  },
  { 
    id: 'P004', 
    name: 'James Chen', 
    gender: 'Male', 
    condition: 'Healthy Adult', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=JC', 
      dateOfBirth: '1994-05-18', 
      age: 29, 
      gender: 'male', 
      mrn: 'MRN-2024-004', 
      phone: '(555) 456-7890', 
      email: 'james.chen@email.com' 
    }
  },
  { 
    id: 'P005', 
    name: 'Linda Johnson', 
    gender: 'Female', 
    condition: 'Pre-diabetes', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=LJ', 
      dateOfBirth: '1952-11-03', 
      age: 71, 
      gender: 'female', 
      mrn: 'MRN-2024-005', 
      phone: '(555) 567-8901', 
      email: 'linda.johnson@email.com' 
    }
  },
  { 
    id: 'P007', 
    name: 'Samantha Reed', 
    gender: 'Female', 
    condition: 'Pre-diabetes', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=SR', 
      dateOfBirth: '1962-04-25', 
      age: 61, 
      gender: 'female', 
      mrn: 'MRN-2024-007', 
      phone: '(555) 789-0123', 
      email: 'samantha.reed@email.com' 
    }
  },
  { 
    id: 'P008', 
    name: 'Robert Dwayne', 
    gender: 'Male', 
    condition: 'Diabetes Type 2', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=RD', 
      dateOfBirth: '1980-09-14', 
      age: 43, 
      gender: 'male', 
      mrn: 'MRN-2024-008', 
      phone: '(555) 890-1234', 
      email: 'robert.dwayne@email.com' 
    },
    alerts: [
      {
        id: 'alert-003',
        type: 'clinical',
        priority: 'high',
        message: 'Medication adherence review needed',
        date: '2023-09-18',
        acknowledged: false
      }
    ]
  },
  { 
    id: 'P009', 
    name: 'John Jimmerson', 
    gender: 'Male', 
    condition: 'Healthy Adult', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=JJ', 
      dateOfBirth: '1985-07-12', 
      age: 38, 
      gender: 'male', 
      mrn: 'MRN-2024-009', 
      phone: '(555) 901-2345', 
      email: 'john.jimmerson@email.com' 
    }
  },
  { 
    id: 'P010', 
    name: 'Alberto Dantesandersonman', 
    gender: 'Male', 
    condition: 'Healthy Adult', 
    demographics: { 
      photo: 'https://api.dicebear.com/8.x/initials/svg?seed=AD', 
      dateOfBirth: '1965-01-30', 
      age: 58, 
      gender: 'male', 
      mrn: 'MRN-2024-010', 
      phone: '(555) 012-3456', 
      email: 'alberto.dantesandersonman@email.com' 
    }
  }
];
export const labResults = [
  // Sarah Mitchell - Diabetes Type 2 (5 different dates showing progression)
  // Date 1: 2024-01-15
  {patient: "Sarah Mitchell", id: '1', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "Sarah Mitchell", id: '2', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "Sarah Mitchell", id: '3', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "Sarah Mitchell", id: '4', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "Sarah Mitchell", id: '5', testName: 'Glucose', value: 138, unit: 'mg/dL', status: 'high', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "Sarah Mitchell", id: '6', testName: 'HbA1c', value: 6.9, unit: '%', status: 'high', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "Sarah Mitchell", id: '7', testName: 'Total Cholesterol', value: 178, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "Sarah Mitchell", id: '8', testName: 'Blood Pressure', value: '125/80', unit: 'mmHg', status: 'elevated', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "Sarah Mitchell", id: '9', testName: 'Glucose', value: 132, unit: 'mg/dL', status: 'high', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "Sarah Mitchell", id: '10', testName: 'HbA1c', value: 6.7, unit: '%', status: 'high', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "Sarah Mitchell", id: '11', testName: 'Total Cholesterol', value: 172, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "Sarah Mitchell", id: '12', testName: 'Blood Pressure', value: '122/78', unit: 'mmHg', status: 'elevated', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "Sarah Mitchell", id: '13', testName: 'Glucose', value: 125, unit: 'mg/dL', status: 'elevated', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "Sarah Mitchell", id: '14', testName: 'HbA1c', value: 6.4, unit: '%', status: 'elevated', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "Sarah Mitchell", id: '15', testName: 'Total Cholesterol', value: 168, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "Sarah Mitchell", id: '16', testName: 'Blood Pressure', value: '119/76', unit: 'mmHg', status: 'normal', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "Sarah Mitchell", id: '17', testName: 'Glucose', value: 118, unit: 'mg/dL', status: 'elevated', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "Sarah Mitchell", id: '18', testName: 'HbA1c', value: 6.1, unit: '%', status: 'elevated', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "Sarah Mitchell", id: '19', testName: 'Total Cholesterol', value: 165, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "Sarah Mitchell", id: '20', testName: 'Blood Pressure', value: '116/74', unit: 'mmHg', status: 'normal', date: '2024-09-15', referenceRange: '<120/80 mmHg' },

  // David McDonald - Hypertension (5 different dates)
  // Date 1: 2024-01-15
  {patient: "David McDonald", id: '21', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "David McDonald", id: '22', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "David McDonald", id: '23', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'elevated', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "David McDonald", id: '24', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "David McDonald", id: '25', testName: 'Glucose', value: 89, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "David McDonald", id: '26', testName: 'HbA1c', value: 5.2, unit: '%', status: 'normal', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "David McDonald", id: '27', testName: 'Total Cholesterol', value: 208, unit: 'mg/dL', status: 'elevated', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "David McDonald", id: '28', testName: 'Blood Pressure', value: '138/92', unit: 'mmHg', status: 'high', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "David McDonald", id: '29', testName: 'Glucose', value: 86, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "David McDonald", id: '30', testName: 'HbA1c', value: 5.1, unit: '%', status: 'normal', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "David McDonald", id: '31', testName: 'Total Cholesterol', value: 202, unit: 'mg/dL', status: 'elevated', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "David McDonald", id: '32', testName: 'Blood Pressure', value: '135/88', unit: 'mmHg', status: 'elevated', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "David McDonald", id: '33', testName: 'Glucose', value: 84, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "David McDonald", id: '34', testName: 'HbA1c', value: 5.0, unit: '%', status: 'normal', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "David McDonald", id: '35', testName: 'Total Cholesterol', value: 195, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "David McDonald", id: '36', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "David McDonald", id: '37', testName: 'Glucose', value: 82, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "David McDonald", id: '38', testName: 'HbA1c', value: 4.9, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "David McDonald", id: '39', testName: 'Total Cholesterol', value: 188, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "David McDonald", id: '40', testName: 'Blood Pressure', value: '124/78', unit: 'mmHg', status: 'elevated', date: '2024-09-15', referenceRange: '<120/80 mmHg' },

  // Maria Rodriguez - Hyperlipidemia (5 different dates)
  // Date 1: 2024-01-15
  {patient: "Maria Rodriguez", id: '41', testName: 'Glucose', value: 88, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "Maria Rodriguez", id: '42', testName: 'HbA1c', value: 5.1, unit: '%', status: 'normal', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "Maria Rodriguez", id: '43', testName: 'Total Cholesterol', value: 285, unit: 'mg/dL', status: 'high', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "Maria Rodriguez", id: '44', testName: 'Blood Pressure', value: '118/76', unit: 'mmHg', status: 'normal', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "Maria Rodriguez", id: '45', testName: 'Glucose', value: 85, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "Maria Rodriguez", id: '46', testName: 'HbA1c', value: 5.0, unit: '%', status: 'normal', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "Maria Rodriguez", id: '47', testName: 'Total Cholesterol', value: 268, unit: 'mg/dL', status: 'high', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "Maria Rodriguez", id: '48', testName: 'Blood Pressure', value: '115/74', unit: 'mmHg', status: 'normal', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "Maria Rodriguez", id: '49', testName: 'Glucose', value: 83, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "Maria Rodriguez", id: '50', testName: 'HbA1c', value: 4.9, unit: '%', status: 'normal', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "Maria Rodriguez", id: '51', testName: 'Total Cholesterol', value: 245, unit: 'mg/dL', status: 'high', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "Maria Rodriguez", id: '52', testName: 'Blood Pressure', value: '112/72', unit: 'mmHg', status: 'normal', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "Maria Rodriguez", id: '53', testName: 'Glucose', value: 81, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "Maria Rodriguez", id: '54', testName: 'HbA1c', value: 4.8, unit: '%', status: 'normal', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "Maria Rodriguez", id: '55', testName: 'Total Cholesterol', value: 225, unit: 'mg/dL', status: 'elevated', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "Maria Rodriguez", id: '56', testName: 'Blood Pressure', value: '110/70', unit: 'mmHg', status: 'normal', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "Maria Rodriguez", id: '57', testName: 'Glucose', value: 79, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "Maria Rodriguez", id: '58', testName: 'HbA1c', value: 4.7, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "Maria Rodriguez", id: '59', testName: 'Total Cholesterol', value: 198, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "Maria Rodriguez", id: '60', testName: 'Blood Pressure', value: '108/68', unit: 'mmHg', status: 'normal', date: '2024-09-15', referenceRange: '<120/80 mmHg' },

  // James Chen - Healthy Adult (5 different dates - consistently normal)
  // Date 1: 2024-01-15
  {patient: "James Chen", id: '61', testName: 'Glucose', value: 85, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "James Chen", id: '62', testName: 'HbA1c', value: 4.8, unit: '%', status: 'normal', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "James Chen", id: '63', testName: 'Total Cholesterol', value: 165, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "James Chen", id: '64', testName: 'Blood Pressure', value: '115/72', unit: 'mmHg', status: 'normal', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "James Chen", id: '65', testName: 'Glucose', value: 87, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "James Chen", id: '66', testName: 'HbA1c', value: 4.9, unit: '%', status: 'normal', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "James Chen", id: '67', testName: 'Total Cholesterol', value: 162, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "James Chen", id: '68', testName: 'Blood Pressure', value: '112/70', unit: 'mmHg', status: 'normal', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "James Chen", id: '69', testName: 'Glucose', value: 83, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "James Chen", id: '70', testName: 'HbA1c', value: 4.7, unit: '%', status: 'normal', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "James Chen", id: '71', testName: 'Total Cholesterol', value: 158, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "James Chen", id: '72', testName: 'Blood Pressure', value: '110/68', unit: 'mmHg', status: 'normal', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "James Chen", id: '73', testName: 'Glucose', value: 81, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "James Chen", id: '74', testName: 'HbA1c', value: 4.6, unit: '%', status: 'normal', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "James Chen", id: '75', testName: 'Total Cholesterol', value: 155, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "James Chen", id: '76', testName: 'Blood Pressure', value: '108/66', unit: 'mmHg', status: 'normal', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "James Chen", id: '77', testName: 'Glucose', value: 79, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "James Chen", id: '78', testName: 'HbA1c', value: 4.5, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "James Chen", id: '79', testName: 'Total Cholesterol', value: 152, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "James Chen", id: '80', testName: 'Blood Pressure', value: '106/64', unit: 'mmHg', status: 'normal', date: '2024-09-15', referenceRange: '<120/80 mmHg' },

  // Linda Johnson - Pre-diabetes (5 different dates showing improvement)
  // Date 1: 2024-01-15
  {patient: "Linda Johnson", id: '81', testName: 'Glucose', value: 118, unit: 'mg/dL', status: 'elevated', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "Linda Johnson", id: '82', testName: 'HbA1c', value: 6.2, unit: '%', status: 'elevated', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "Linda Johnson", id: '83', testName: 'Total Cholesterol', value: 198, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "Linda Johnson", id: '84', testName: 'Blood Pressure', value: '135/88', unit: 'mmHg', status: 'elevated', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "Linda Johnson", id: '85', testName: 'Glucose', value: 115, unit: 'mg/dL', status: 'elevated', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "Linda Johnson", id: '86', testName: 'HbA1c', value: 6.0, unit: '%', status: 'elevated', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "Linda Johnson", id: '87', testName: 'Total Cholesterol', value: 192, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "Linda Johnson", id: '88', testName: 'Blood Pressure', value: '132/85', unit: 'mmHg', status: 'elevated', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "Linda Johnson", id: '89', testName: 'Glucose', value: 112, unit: 'mg/dL', status: 'elevated', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "Linda Johnson", id: '90', testName: 'HbA1c', value: 5.8, unit: '%', status: 'elevated', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "Linda Johnson", id: '91', testName: 'Total Cholesterol', value: 188, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "Linda Johnson", id: '92', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "Linda Johnson", id: '93', testName: 'Glucose', value: 108, unit: 'mg/dL', status: 'elevated', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "Linda Johnson", id: '94', testName: 'HbA1c', value: 5.7, unit: '%', status: 'elevated', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "Linda Johnson", id: '95', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "Linda Johnson", id: '96', testName: 'Blood Pressure', value: '125/79', unit: 'mmHg', status: 'elevated', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "Linda Johnson", id: '97', testName: 'Glucose', value: 105, unit: 'mg/dL', status: 'elevated', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "Linda Johnson", id: '98', testName: 'HbA1c', value: 5.6, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "Linda Johnson", id: '99', testName: 'Total Cholesterol', value: 182, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "Linda Johnson", id: '100', testName: 'Blood Pressure', value: '122/76', unit: 'mmHg', status: 'elevated', date: '2024-09-15', referenceRange: '<120/80 mmHg' },
  // Alberto Dantes - Diabetes Type 1 (5 different dates showing progression)
  // Date 1: 2024-01-15
  {patient: "Alberto Dantesandersonman", id: '101', testName: 'Glucose', value: 240, unit: 'mg/dL', status: 'high', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '102', testName: 'HbA1c', value: 8.5, unit: '%', status: 'high', date: '2024-01-15', referenceRange: '4.0-5.6%' },
  {patient: "Alberto Dantesandersonman", id: '103', testName: 'Total Cholesterol', value: 220, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '104', testName: 'Blood Pressure', value: '145/95', unit: 'mmHg', status: 'elevated', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
  
  // Date 2: 2024-02-20
  {patient: "Alberto Dantesandersonman", id: '105', testName: 'Glucose', value: 225, unit: 'mg/dL', status: 'high', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '106', testName: 'HbA1c', value: 8.2, unit: '%', status: 'high', date: '2024-02-20', referenceRange: '4.0-5.6%' },
  {patient: "Alberto Dantesandersonman", id: '107', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '108', testName: 'Blood Pressure', value: '140/92', unit: 'mmHg', status: 'elevated', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
  
  // Date 3: 2024-04-10
  {patient: "Alberto Dantesandersonman", id: '109', testName: 'Glucose', value: 210, unit: 'mg/dL', status: 'high', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '110', testName: 'HbA1c', value: 8.0, unit: '%', status: 'high', date: '2024-04-10', referenceRange: '4.0-5.6%' },
  {patient: "Alberto Dantesandersonman", id: '111', testName: 'Total Cholesterol', value: '210', unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '112', testName: 'Blood Pressure', value: '135/88', unit: 'mmHg', status: 'elevated', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
  
  // Date 4: 2024-06-25
  {patient: "Alberto Dantesandersonman", id: '113', testName: 'Glucose', value: 195, unit: 'mg/dL', status: 'high', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '114', testName: 'HbA1c', value: 7.8, unit: '%', status: 'high', date: '2024-06-25', referenceRange: '4.0-5.6%' },
  {patient: "Alberto Dantesandersonman", id: '115', testName: 'Total Cholesterol', value: 205, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '116', testName: 'Blood Pressure', value: '130/85', unit: 'mmHg', status: 'elevated', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
  
  // Date 5: 2024-09-15 (Latest)
  {patient: "Alberto Dantesandersonman", id: '117', testName: 'Glucose', value: 180, unit: 'mg/dL', status: 'high', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '118', testName: 'HbA1c', value: 7.5, unit: '%', status: 'high', date: '2024-09-15', referenceRange: '4.0-5.6%' },
  {patient: "Alberto Dantesandersonman", id: '119', testName: 'Total Cholesterol', value: 200, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
  {patient: "Alberto Dantesandersonman", id: '120', testName: 'Blood Pressure', value: '125/80', unit: 'mmHg', status: 'elevated', date: '2024-09-15', referenceRange: '<120/80 mmHg' },
  // Robert Dwayne - Diabetes Type 2 (5 different dates showing progression)
  // Date 1: 2024-01-15
 {patient: "Robert Dwayne", id: '121', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
 {patient: "Robert Dwayne", id: '122', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-01-15', referenceRange: '4.0-5.6%' },
 {patient: "Robert Dwayne", id: '123', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
 {patient: "Robert Dwayne", id: '124', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
 // Date 2: 2024-02-20
 {patient: "Robert Dwayne", id: '125', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
 {patient: "Robert Dwayne", id: '126', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-02-20', referenceRange: '4.0-5.6%' },
 {patient: "Robert Dwayne", id: '127', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
 {patient: "Robert Dwayne", id: '128', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
 // Date 3: 2024-04-10
 {patient: "Robert Dwayne", id: '129', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
 {patient: "Robert Dwayne", id: '130', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-04-10', referenceRange: '4.0-5.6%' },
 {patient: "Robert Dwayne", id: '131', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
 {patient: "Robert Dwayne", id: '132', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
 // Date 4: 2024-06-25
 {patient: "Robert Dwayne", id: '133', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
 {patient: "Robert Dwayne", id: '134', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-06-25', referenceRange: '4.0-5.6%' },
 {patient: "Robert Dwayne", id: '135', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
 {patient: "Robert Dwayne", id: '136', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
 // Date 5: 2024-09-15 (Latest)
 {patient: "Robert Dwayne", id: '137', testName: 'Glucose', value: 145, unit: 'mg/dL', status: 'high', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
 {patient: "Robert Dwayne", id: '138', testName: 'HbA1c', value: 7.2, unit: '%', status: 'high', date: '2024-09-15', referenceRange: '4.0-5.6%' },
 {patient: "Robert Dwayne", id: '139', testName: 'Total Cholesterol', value: 185, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
 {patient: "Robert Dwayne", id: '140', testName: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'elevated', date: '2024-09-15', referenceRange: '<120/80 mmHg' },

 // Jim Jimmerson - Elevated Blood Pressure (high BP, normal cholesterol)
 // Date 1: 2024-01-15
 {patient: "John Jimmerson", id: '141', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
 {patient: "John Jimmerson", id: '142', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-01-15', referenceRange: '4.0-5.6%' },
 {patient: "John Jimmerson", id: '143', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
 {patient: "John Jimmerson", id: '144', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
 {patient: "John Jimmerson", id: '145', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-01-15', referenceRange: '160-190 lbs' },  
 // Date 2: 2024-02-20
 {patient: "John Jimmerson", id: '146', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
 {patient: "John Jimmerson", id: '147', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-02-20', referenceRange: '4.0-5.6%' },
 {patient: "John Jimmerson", id: '148', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
 {patient: "John Jimmerson", id: '149', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
 {patient: "John Jimmerson", id: '150', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-02-20', referenceRange: '160-190 lbs' },
 // Date 3: 2024-04-10
 {patient: "John Jimmerson", id: '151', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
 {patient: "John Jimmerson", id: '152', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-04-10', referenceRange: '4.0-5.6%' },
 {patient: "John Jimmerson", id: '153', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
 {patient: "John Jimmerson", id: '154', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
 {patient: "John Jimmerson", id: '155', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-04-10', referenceRange: '160-190 lbs' },
 // Date 4: 2024-06-25
 {patient: "John Jimmerson", id: '156', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
 {patient: "John Jimmerson", id: '157', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-06-25', referenceRange: '4.0-5.6%' },
 {patient: "John Jimmerson", id: '158', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
 {patient: "John Jimmerson", id: '159', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
 {patient: "John Jimmerson", id: '160', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-06-25', referenceRange: '160-190 lbs' },
 // Date 5: 2024-09-15 (Latest)
 {patient: "John Jimmerson", id: '161', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
 {patient: "John Jimmerson", id: '162', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
 {patient: "John Jimmerson", id: '163', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
 {patient: "John Jimmerson", id: '164', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-09-15', referenceRange: '<120/80 mmHg' },
 {patient: "John Jimmerson", id: '165', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-09-15', referenceRange: '160-190 lbs' },
 // Samantha Reed - Elevated Cholesterol (high cholesterol, normal otherwise)
 // Date 1: 2024-01-15
 {patient: "Samantha Reed", id: '146', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '70-99 mg/dL' },
 {patient: "Samantha Reed", id: '147', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-01-15', referenceRange: '4.0-5.6%' },
 {patient: "Samantha Reed", id: '150', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-01-15', referenceRange: '160-190 lbs' },
 {patient: "Samantha Reed", id: '151', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-01-15', referenceRange: '<200 mg/dL' },
 {patient: "Samantha Reed", id: '152', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-01-15', referenceRange: '<120/80 mmHg' },
    // Date 2: 2024-02-20
 {patient: "Samantha Reed", id: '151', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '70-99 mg/dL' },
 {patient: "Samantha Reed", id: '152', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-02-20', referenceRange: '4.0-5.6%' },
 {patient: "Samantha Reed", id: '153', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-02-20', referenceRange: '160-190 lbs' },
 {patient: "Samantha Reed", id: '154', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-02-20', referenceRange: '<200 mg/dL' },
 {patient: "Samantha Reed", id: '155', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-02-20', referenceRange: '<120/80 mmHg' },
 // Date 3: 2024-04-10
 {patient: "Samantha Reed", id: '154', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '70-99 mg/dL' },
 {patient: "Samantha Reed", id: '155', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-04-10', referenceRange: '4.0-5.6%' },
 {patient: "Samantha Reed", id: '156', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-04-10', referenceRange: '160-190 lbs' },
 {patient: "Samantha Reed", id: '157', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-04-10', referenceRange: '<200 mg/dL' },
 {patient: "Samantha Reed", id: '158', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-04-10', referenceRange: '<120/80 mmHg' },
 // Date 4: 2024-06-25
 {patient: "Samantha Reed", id: '157', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '70-99 mg/dL' },
 {patient: "Samantha Reed", id: '158', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-06-25', referenceRange: '4.0-5.6%' },
 {patient: "Samantha Reed", id: '159', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-06-25', referenceRange: '160-190 lbs' },
 {patient: "Samantha Reed", id: '160', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-06-25', referenceRange: '<200 mg/dL' },
 {patient: "Samantha Reed", id: '161', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-06-25', referenceRange: '<120/80 mmHg' },
 // Date 5: 2024-09-15 (Latest)
 {patient: "Samantha Reed", id: '160', testName: 'Glucose', value: 92, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '70-99 mg/dL' },
 {patient: "Samantha Reed", id: '161', testName: 'HbA1c', value: 5.4, unit: '%', status: 'normal', date: '2024-09-15', referenceRange: '4.0-5.6%' },
 {patient: "Samantha Reed", id: '162', testName: 'Weight', value: 195, unit: 'lbs', status: 'normal', date: '2024-09-15', referenceRange: '160-190 lbs' },
 {patient: "Samantha Reed", id: '163', testName: 'Total Cholesterol', value: 215, unit: 'mg/dL', status: 'normal', date: '2024-09-15', referenceRange: '<200 mg/dL' },
 {patient: "Samantha Reed", id: '164', testName: 'Blood Pressure', value: '142/95', unit: 'mmHg', status: 'high', date: '2024-09-15', referenceRange: '<120/80 mmHg' },  
  
];
