import { useEffect, useState } from "react";
function gvtech(){
const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.mobile}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default gvtech;