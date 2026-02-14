import { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      phone: '',
      dob: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email.trim() && !formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone.trim())) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    if (formData.dob.trim()) {
      const selectedDate = new Date(formData.dob);
      const today = new Date();
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (selectedDate > today) {
        alert('Invalid date of birth. Date of birth cannot be in the future.');
        return;
      }
    }

    if (!formData.username.trim()) {
      alert('Please fill out this field.');
      return;
    }

    if (!formData.email.trim()) {
      alert('Please fill out this field.');
      return;
    }

    if (!formData.phone.trim()) {
      alert('Please fill out this field.');
      return;
    }

    if (!formData.dob.trim()) {
      alert('Please fill out this field.');
      return;
    }

    resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <button
        type="button"
        className="open-form-button"
        onClick={() => setIsModalOpen(true)}
      >
        Open Form
      </button>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleInputChange}
              />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
