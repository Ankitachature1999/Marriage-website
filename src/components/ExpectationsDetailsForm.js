import React, { useState } from 'react';
import './ExpectationsDetailsForm.css'; // Assuming there's a CSS file for styling

function ExpectationsDetailsForm() {
  const [formData, setFormData] = useState({
    minIncome: '',
    openForInterCaste: '',
    educationExpectations: '',
    maritalStatus: '',
    minHeight: '',
    maxHeight: '',
    minAge: '',
    maxAge: '',
    casteExpectations: '',
    preferredCities: [],
    aboutYourself: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (city, isChecked) => {
    if (isChecked) {
      setFormData({ ...formData, preferredCities: [...formData.preferredCities, city] });
    } else {
      setFormData({ ...formData, preferredCities: formData.preferredCities.filter(c => c !== city) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Expectations Details</h2>

      <label>
        Minimum Annual Income:
        <input
          type="text"
          name="minIncome"
          value={formData.minIncome}
          onChange={handleChange}
        />
      </label>

      <label>
        Open for Inter-Caste Marriage:
        <input
          type="radio"
          name="openForInterCaste"
          value="Yes"
          onChange={handleChange}
          checked={formData.openForInterCaste === 'Yes'}
        /> Yes
        <input
          type="radio"
          name="openForInterCaste"
          value="No"
          onChange={handleChange}
          checked={formData.openForInterCaste === 'No'}
        /> No
      </label>

      <label>
        Education Expectations:
        <select
          name="educationExpectations"
          value={formData.educationExpectations}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="Doctorate">Doctorate</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Marital Status:
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Minimum Height (cm):
        <input
          type="number"
          name="minHeight"
          value={formData.minHeight}
          onChange={handleChange}
        />
      </label>

      <label>
        Maximum Height (cm):
        <input
          type="number"
          name="maxHeight"
          value={formData.maxHeight}
          onChange={handleChange}
        />
      </label>

      <label>
        Minimum Age:
        <input
          type="number"
          name="minAge"
          value={formData.minAge}
          onChange={handleChange}
        />
      </label>

      <label>
        Maximum Age:
        <input
          type="number"
          name="maxAge"
          value={formData.maxAge}
          onChange={handleChange}
        />
      </label>

      <label>
        Caste Expectations:
        <input
          type="text"
          name="casteExpectations"
          value={formData.casteExpectations}
          onChange={handleChange}
        />
      </label>

      <fieldset>
        <legend>Preferred Cities:</legend>
        {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'].map((city) => (
          <label key={city}>
            <input
              type="checkbox"
              name="preferredCities"
              value={city}
              checked={formData.preferredCities.includes(city)}
              onChange={(e) => handleCityChange(city, e.target.checked)}
            />
            {city}
          </label>
        ))}
      </fieldset>

      <label>
        About Yourself:
        <textarea
          name="aboutYourself"
          value={formData.aboutYourself}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpectationsDetailsForm;
