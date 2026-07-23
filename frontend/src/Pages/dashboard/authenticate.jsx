import { useEffect, useState } from "react";

function Dashboard() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/gvtech")
            .then((response) => response.json())
            .then((data) => {

                console.log(data);

                setStudents(data);

            });

    }, []);

    return (

        <div style={{ padding: "30px" }}>

            <h1>Dashboard</h1>

            <h2>GVTech Datas</h2>

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

                    {students.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.age}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Dashboard;