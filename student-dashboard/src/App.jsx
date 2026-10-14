import { useState } from "react";
import students from "./student";

function StudentTable() {

  const [search, setSearch] = useState("");

  let rows = [];

  for (let i = 0; i < students.length; i++) {

    if (
      students[i].name.toLowerCase().includes(search.toLowerCase())
    ) {
      rows.push(
        <tr key={students[i].id}>
          <td>{students[i].id}</td>
          <td>{students[i].name}</td>
          <td>{students[i].course}</td>
          <td>{students[i].Branch}</td>
        </tr>
      );
    }
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>

    </div>
  );
}

function App() {
  return (
    <>
      <h1>Student Details</h1>
      <StudentTable />
    </>
  );
}

export default App;