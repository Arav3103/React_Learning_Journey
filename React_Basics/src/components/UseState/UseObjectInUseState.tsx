import { useState, type FC, type ChangeEvent } from "react";

type ToDoItem = {
  name: string;
  category: {
    subCategory: string;
  };
};
const UseObjectInUseState: FC = () => {
  const [todoItem, setTodoItem] = useState<ToDoItem>(() => {
    // console.log("Component rendered");
    return { name: "", category: { subCategory: "" } };
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setTodoItem((prevObj) => {
      if (name === "subCategory") {
        return {
          ...prevObj,
          category: {
            ...prevObj.category,
            subCategory: value,
          },
        };
      } else {
        return { ...prevObj, [name]: value };
      }
    });
  };
  return (
    <>
      <div>UseObjectInUseState</div>
      <input
        type="text"
        id="todoList"
        name="name"
        placeholder="Add the todo item"
        onChange={handleChange}
      />
      <input
        type="text"
        id="subCategory"
        name="subCategory"
        placeholder="Add the category"
        onChange={handleChange}
      />
      <p>{`ToDo Item : ${todoItem.name}`}</p>
      <p>{`Sub Category : ${todoItem.category.subCategory}`}</p>
    </>
  );
};

export default UseObjectInUseState;
