import React from 'react'

const TeacherLogin = () => {
  return (
    <>
      <form action="#" method="POST">
    <center>
    <table>
    <tr>
        <td>Teacher Id</td>
        <td><input type="text" name="tid" /></td>
    </tr>
    <tr>
        <td> Password </td>
        <td><input type="password" name="password" /> </td>
    </tr>
    <tr>
        <td><center><input type="submit" value="submit" /></center></td>
    </tr>
    </table>
    </center>
</form>

    </>
  )
}

export default TeacherLogin