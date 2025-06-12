import { useState, type FC, type ChangeEvent } from "react";

const UseStringInUseState: FC = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentName = e.currentTarget.value;
    setName(currentName);
  };
  return (
    <>
      <div>UseStringInUseState</div>
      <input
        type="text"
        id="name"
        placeholder="Type your name"
        onChange={handleChange}
      />
      <h1>{name}</h1>
    </>
  );
};

export default UseStringInUseState;
