export default function getStudentIdsSum(students) {
  return students.reduce((studentID, student) => studentID + student.id, 0);
}
