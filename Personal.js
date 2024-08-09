
import React from 'react';
function Personal() {
    let form = () => {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let num = document.getElementById('num').value;
        let email = document.getElementById('email').value;
        let dob = document.getElementById('dob').value;
        alert("Hai " + name + " your details have been registered");
    }
    return (
        <>
            <h1>Personal details</h1>
            <label>Name:</label>
            <input type="text" id="name" name="name"></input>
            <label>Age:</label>
            <input type="number" id="age" name="age"></input>
            <label>Contact Number:</label>
            <input type="tel" id="num" name="num"></input>
            <label>Email ID:</label>
            <input type="email" id="email" name="email"></input>
            <label>Date of birth:</label>
            <input type="date" id="dob" name="dob"></input><br></br><br></br>
            <input type="button" value="Click" onClick={form}></input>
        </>
    )
}

export default Personal