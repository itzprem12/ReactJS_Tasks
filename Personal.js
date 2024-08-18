
import React from 'react';
function Personal() {
    let form = () => {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let num = document.getElementById('num').value;
        let email = document.getElementById('email').value;
        let dob = document.getElementById('dob').value;
        let state = document.getElementById('state').value;
        alert("Hai " + name + " have been registered");
    }
    return (
        <>
            <h1>Personal details</h1><br></br>
            <label>Name:</label>
            <input type="text" id="name" name="name"/><br></br>
            <label>Age:</label>
            <input type="number" id="age" name="age"/><br></br>
            <label>DOB:</label>
            <input type="date" id="dob" name="dob"></input><br></br>
            <label>Contact Number:</label>
            <input type="tel" id="num" name="num"/><br></br>
            <label>Email:</label>
            <input type="email" id="email" name="email"/><br></br>
            <label>State:</label>
            <input type="text" id="state" name="state"/><br></br>
            <input type="button" value="Click" onClick={form}></input>

        </>
    )
}

export default Personal
