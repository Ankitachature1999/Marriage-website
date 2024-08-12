import React, { useState } from 'react';
import './FamilyForm.css' // Assuming there's a CSS file for styling

function FamilyDetails() {
  const [formData, setFormData] = useState({
    fatherAlive: '',
    motherAlive: '',
    parentsLivingTogether: '',
    interCasteMarriage: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    mamaName: '',
    nativePlace: '',
    currentLocation: '',
    familyWealth: '',
    relativesSurnames: '',
    unmarriedBrothers: '',
    marriedBrothers: '',
    unmarriedSisters: '',
    marriedSisters: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit your form data as needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Family Details</h2>

      <label>
        Father Alive:
        <input
          type="radio"
          name="fatherAlive"
          value="Yes"
          onChange={handleChange}
          checked={formData.fatherAlive === 'Yes'}
        /> Yes
        <input
          type="radio"
          name="fatherAlive"
          value="No"
          onChange={handleChange}
          checked={formData.fatherAlive === 'No'}
        /> No
      </label>

      <label>
        Mother Alive:
        <input
          type="radio"
          name="motherAlive"
          value="Yes"
          onChange={handleChange}
          checked={formData.motherAlive === 'Yes'}
        /> Yes
        <input
          type="radio"
          name="motherAlive"
          value="No"
          onChange={handleChange}
          checked={formData.motherAlive === 'No'}
        /> No
      </label>

      <label>
        Parents Living Together:
        <input
          type="radio"
          name="parentsLivingTogether"
          value="Yes"
          onChange={handleChange}
          checked={formData.parentsLivingTogether === 'Yes'}
        /> Yes
        <input
          type="radio"
          name="parentsLivingTogether"
          value="No"
          onChange={handleChange}
          checked={formData.parentsLivingTogether === 'No'}
        /> No
      </label>

      <label>
        Inter-Caste Marriage:
        <input
          type="radio"
          name="interCasteMarriage"
          value="Yes"
          onChange={handleChange}
          checked={formData.interCasteMarriage === 'Yes'}
        /> Yes
        <input
          type="radio"
          name="interCasteMarriage"
          value="No"
          onChange={handleChange}
          checked={formData.interCasteMarriage === 'No'}
        /> No
      </label>

      <label>
        Father's Name:
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />
      </label>

      <label>
        Father's Occupation:
        <input
          type="text"
          name="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
        />
      </label>

      <label>
        Mother's Name:
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
        />
      </label>

      <label>
        Mother's Occupation:
        <input
          type="text"
          name="motherOccupation"
          value={formData.motherOccupation}
          onChange={handleChange}
        />
      </label>

      <label>
        Mama's Name:
        <input
          type="text"
          name="mamaName"
          value={formData.mamaName}
          onChange={handleChange}
        />
      </label>

      <label>
        Native Place:
        <input
          type="text"
          name="nativePlace"
          value={formData.nativePlace}
          onChange={handleChange}
        />
      </label>

      <label>
        Current Location:
        <input
          type="text"
          name="currentLocation"
          value={formData.currentLocation}
          onChange={handleChange}
        />
      </label>

      <label>
        Family Wealth:
        <input
          type="text"
          name="familyWealth"
          value={formData.familyWealth}
          onChange={handleChange}
        />
      </label>

      <label>
        Relatives' Surnames:
        <input
          type="text"
          name="relativesSurnames"
          value={formData.relativesSurnames}
          onChange={handleChange}
        />
      </label>

      <label>
        Unmarried Brothers:
        <input
          type="number"
          name="unmarriedBrothers"
          value={formData.unmarriedBrothers}
          onChange={handleChange}
        />
      </label>

      <label>
        Married Brothers:
        <input
          type="number"
          name="marriedBrothers"
          value={formData.marriedBrothers}
          onChange={handleChange}
        />
      </label>

      <label>
        Unmarried Sisters:
        <input
          type="number"
          name="unmarriedSisters"
          value={formData.unmarriedSisters}
          onChange={handleChange}
        />
      </label>

      <label>
        Married Sisters:
        <input
          type="number"
          name="marriedSisters"
          value={formData.marriedSisters}
          onChange={handleChange}
        />
      </label>

      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default FamilyDetails;
