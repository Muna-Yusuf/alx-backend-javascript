// Subject.ts
import Teacher = require("./Teacher");

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}

export = Subjects;

