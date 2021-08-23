function StudentInformation (props) { 
    const { studentName, grade, subject } = props; 
    // above use destructuring so we do not have type "props." every time

    return (
    <div>
        <p>Student's Name: {studentName}</p>  {/* only had to type "studentNaem" and not "props.studentName"  */}
        <p>Current Grade: {grade} </p>
        <p>Subject: {subject} </p>
    </div>);
}
export default StudentInformation;