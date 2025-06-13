import { useEffect, useState, type ChangeEvent } from "react";

const LocalStorage = () => {
  const [item, setItem] = useState<number>(0);
  const [list, setList] = useState<number[]>([]);
  useEffect(() => localStorage.setItem("List", JSON.stringify(list)), [list]); //Updates whenever there is a change in list and updated LS
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("CurrentItemValue", JSON.stringify(item));
    }, 1000); //Updates whenever there is a change in item and updated LS after one sec
  }, [item]);
  return (
    <>
      <div>LocalStorage</div>
      <input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setItem(Number(e.target.value))
        }
        value={item}
      />
      <button onClick={() => setList(() => [...list, item])}>
        Click me to Add
      </button>
    </>
  );
};

export default LocalStorage;
