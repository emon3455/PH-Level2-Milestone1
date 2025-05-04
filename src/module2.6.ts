{
  //
  const addCourseToStudent = <T extends {id:number; name: string; email: string}>(student: T) => {
    const course = "Level-2 Web Development";

    return { ...student, course };
  };

  const newStudent3 = addCourseToStudent({id: 1231, name: "Emon", email: "emon@optimalmd.com"})


  const student1 = {
    id: 1231,
    name: "Emon",
    email: "emon.mhk69@gmail.com",
    age: 23,
    address: "Dhaka, Bangladesh",
    phone: "01700000000",
    hasWatch: true,
    hasBike: false,
  };
  const student2 = {
    id: 1231,
    name: "Emon",
    email: "emon.mhk69@gmail.com",
    phone: "01700000000",
    hasWatch: true,
    hasBike: true,
    hasMacbook: true,
    hasIphone: true,
  };
  
  const newStudent1 = addCourseToStudent(student1);
  const newStudent2 = addCourseToStudent(student2);

  console.log(newStudent2);
  console.log(newStudent1);

  //
}
