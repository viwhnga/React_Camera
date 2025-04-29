import { useState } from "react";

export default function FormBasic() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div>
      <h1 className="font-bold">Hello {name}</h1>
      <p>Enter Your Name: </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}
