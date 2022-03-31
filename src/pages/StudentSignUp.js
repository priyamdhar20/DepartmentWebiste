import React from 'react';

const StudentSignUp = () => {
  return (
    <>

      <form action="#" method="get">
        <center>
            Name: <input type="text" name="Sname"/>
            <br />
            UID: <input type="text" name="UID"/>
            <br />
            Semester: 
            Semester1<input type="checkbox" name="Sem1"/>
            Semester2<input type="checkbox" name="Sem2"/>
            Semester3<input type="checkbox" name="Sem3"/>
            Semester4<input type="checkbox" name="Sem4"/>
            Semester5<input type="checkbox" name="Sem5"/>
            Semester6<input type="checkbox" name="Sem6"/>
            <br />
            Registration No: <input type="text" name="Reg"/>
            <br />
            <input type="submit" value="submit" />
        </center>
    </form>

    </>
  );
}

export default StudentSignUp;