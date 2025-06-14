interface Person {
  name: string;
  age: number;
  gender?: string;
}

interface Employee extends Person {
  salary: number;
  language: Language;
  total: totalSubjectScore;
} // Even type can also be extended

type Language = "Tamil" | "English"; //Union
type subject1 = { name: string; score: number };
type subject2 = { cutoff: number };
type totalSubjectScore = subject1 & subject2;

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = Person & { salary: number };

const Employee = ({
  name,
  age,
  gender = "Male",
  salary,
  language,
  total,
}: Employee) => {
  return (
    <>
      <div>Employee</div>
      <p>Name : {name}</p>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <p>Salary : {salary}</p>
      <p>Language : {language}</p>
      <p>Subject Name : {total.name}</p>
      <p>Subject score : {total.score}</p>
    </>
  );
};

const Person = () => {
  return (
    <>
      <div>BasicParentProps</div>
      <Employee
        name="Katak"
        age={24}
        salary={1500}
        language="Tamil"
        total={{ name: "a", score: 45, cutoff: 98 }}
      />
    </>
  );
};

export default Person;
