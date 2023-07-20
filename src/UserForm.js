import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Form = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #444;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label input[type="checkbox"],
  label input[type="radio"] {
    margin-right: 5px;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }

  button#clearButton {
    background-color: #f44336;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const DisplayInfo = styled.div`
  margin-top: 30px;
  p {
    margin: 5px 0;
  }
`;

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process form data here (you can also send it to a server if needed)

    // Display the user data
    const userInfo = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website || "N/A"}</p>
      <p><strong>Gender:</strong> ${gender || "N/A"}</p>
      <p><strong>Skills:</strong> ${skills.length > 0 ? skills.join(", ") : "N/A"}</p>
    `;

    document.getElementById("displayInfo").innerHTML = userInfo;
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setGender('');
    setSkills([]);
    document.getElementById("displayInfo").innerHTML = "";
  };

  return (
    <Container>
      <Title>User Input Form</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="website">Website:</label>
        <input type="text" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />

        <label>Gender:</label>
        <label><input type="radio" name="gender" value="male" checked={gender === "male"} onChange={() => setGender("male")} /> Male</label>
        <label><input type="radio" name="gender" value="female" checked={gender === "female"} onChange={() => setGender("female")} /> Female</label>
        <label><input type="radio" name="gender" value="other" checked={gender === "other"} onChange={() => setGender("other")} /> Other</label>

        <label>Skills:</label>
        <label><input type="checkbox" name="skills" value="html" checked={skills.includes("html")} onChange={() => setSkills(prevSkills => toggleSkill(prevSkills, "html"))} /> HTML</label>
        <label><input type="checkbox" name="skills" value="css" checked={skills.includes("css")} onChange={() => setSkills(prevSkills => toggleSkill(prevSkills, "css"))} /> CSS</label>
        <label><input type="checkbox" name="skills" value="javascript" checked={skills.includes("javascript")} onChange={() => setSkills(prevSkills => toggleSkill(prevSkills, "javascript"))} /> JavaScript</label>
        {/* Add more skills as needed */}

        <button type="submit">Submit</button>
        <button type="button" id="clearButton" onClick={handleClear}>Clear</button>
      </Form>

      <DisplayInfo id="displayInfo">
        {/* User data will be displayed here */}
      </DisplayInfo>
    </Container>
  );
};

// Helper function to toggle skills
const toggleSkill = (prevSkills, skill) => {
  return prevSkills.includes(skill)
    ? prevSkills.filter((s) => s !== skill)
    : [...prevSkills, skill];
};

export default UserForm;