// Cpp.ts
import Teacher = require("./Teacher");
import Subject = require("./Subject");

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for C++";
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

export = Subjects;

