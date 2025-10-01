import { DashboardContent } from './components/dashboard/DashboardContent';
import { PatientProvider } from './contexts/PatientContext';
import { ViewProvider } from './contexts/ViewContext';
import './App.css';

export default function App() {
  return (
    <ViewProvider initialView="clinician-view">
      <PatientProvider>
        <DashboardContent />
      </PatientProvider>
    </ViewProvider>
  );
}
