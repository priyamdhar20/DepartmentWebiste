import React from 'react';

const TeacherSignUp = () => {
  return (
    <>
      <form action="" method="get">
        <center>
            Name: <input type="text" name="Tname" />
            <br />
            TID: <input type="text" name="TID" />
            <br />
            Qualification: <input type="text" name="Qualification" multiple />
            <br />
            <input type="submit" value="submit" />
        </center>
    </form>

    </>
  );
}

export default TeacherSignUp;