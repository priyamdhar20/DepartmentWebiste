import React from 'react';

const QuestionSetUI = () => {
  return (
    <>

      <form action="#" method="post">
        <center>
            <table>
                <tr>
                    <td>Question id: </td>
                    <td><input type="text" name="Qid" /></td>
                </tr>
                <tr>
                    <td>Course id: </td>
                    <td><input type="text" name="Cid" /></td>
                </tr>
                <tr>
                    <td>Exam id: </td>
                    <td><input type="text" name="eid" /></td>
                </tr>
                <tr>
                    <td>Question</td>
                    <td><textarea name="question" rows="10" cols="30"></textarea></td>
                </tr>
                <tr>
                    <td>Option1:</td>
                    <td><input type="text" name="Option1" /></td>
                </tr>
                <tr>
                    <td>Option2:</td>
                    <td><input type="text" name="Option2" /></td>
                </tr>
                <tr>
                    <td>Option3:</td>
                    <td><input type="text" name="Option3" /></td>
                </tr>
                <tr>
                    <td>Option4:</td>
                    <td><input type="text" name="Option4" /></td>
                </tr>
                <tr>
                    <td>Correct Option:</td>
                    <td><input type="text" name="Option1" /></td>
                </tr>
                <tr><td><input type="submit" value="submit" /></td></tr>
            </table>
        </center>
    </form>
    </>
  );
}

export default QuestionSetUI