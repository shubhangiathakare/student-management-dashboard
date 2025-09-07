import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;