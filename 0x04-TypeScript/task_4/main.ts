// main.ts
import Teacher = require("./subjects/Teacher");
import Cpp = require("./subjects/Cpp");
import Java = require("./subjects/Java");
import React = require("./subjects/React");

const cTeacher: Teacher = { firstName: "Guillaume", lastName: "Salva", experienceTeachingC: 10 };

const cpp = new Cpp();
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

