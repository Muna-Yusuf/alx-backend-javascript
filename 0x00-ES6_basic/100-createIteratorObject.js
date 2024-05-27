export default function createIteratorObject(report) {
    const employees = Object.values(report).flatMap(department => department.employees);
    const iterator = employees[Symbol.iterator]();
    return iterator;
}
