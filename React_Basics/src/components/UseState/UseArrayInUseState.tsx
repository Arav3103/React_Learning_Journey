import { useState, type FC, type ChangeEvent } from "react";

const UseArrayInUseState: FC = () => {
  const [name, setName] = useState<string>("");
  const [, setTodoList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentName = e.currentTarget.value;
    setName(currentName);
  };

  const handleClick = (): void => {
    setTodoList((prevList) => {
      // console.log("Previous List :", prevList);
      const updateTodoList = [...prevList, name];
      // console.log("Current List :", updateTodoList);
      return updateTodoList;
    });
  };
  return (
    <>
      <div>UseArrayInUseState</div>
      <input
        type="text"
        id="todoList"
        placeholder="Add the todo item"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add item</button>
    </>
  );
};

export default UseArrayInUseState;
