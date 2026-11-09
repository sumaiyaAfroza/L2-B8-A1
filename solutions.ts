
//* pblm-1
// const multiplyValue = (value: number, multiplier?: number): number => {
//   if (multiplier === 0) {
//     return value * multiplier;
//   } else if (multiplier === undefined) {
//     return value * 2;
//   } else {
//     return value * multiplier;
//   }
// };


//* pblm-2
// function processInput (value: string | number | boolean) : string | number {
//   if(typeof value === "string") {
//    return value.trim().toLowerCase()
//   }
//   else if (typeof value === "number") {
//    return value * 10
//   }
//   else {
//     return value ? "Active" :"Inactive"
//   }
// }


//* pblm-3
// function formatCoordinate ( coordinate : readonly [number, number, string]) : string {
//    const  [latitude, longitude, locationName] = coordinate
//    return `Location: ${locationName} (${latitude}, ${longitude})`
// }


//*pblm - 4
//  function concatenateArrays<T> (...arrays: T[][] ) {
//     const combinedArray : T[] = []
//     for (const array of arrays) {
//        combinedArray.push(...array)
//     }
//      return combinedArray
//  }


//* pblm-5
// interface Course {
//     title :string;
//     students : number;
//    isPublished : boolean
// }
// function getPopularCourses ( courses: Course[], minStudents: number) : Course[] {
//    return courses.filter((course : Course )=> 
//    course.isPublished === true && course.students >= minStudents
//    )
// }
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];


//* pblm-6
// function pluckValues <T, K extends keyof T>(items: T[], key: K ): T[K][]  {
//     return items.map((item: T): T[K] => item[key])
// }

// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" }
// ];




//* pblm - 7
// class Employee {
//     constructor(protected name: string,  private baseSalary: number ) {
//     }
//     getDetails(){
//         return  `Employee : ${this.name}, Base Salary: ${this.baseSalary}`
//     }
// }
// class Manager extends Employee{
// constructor(name: string, baseSalary: number, private department: string ) {
//     super(name, baseSalary);
// }
//     getRoleInfo(){
//     return `Manager of ${this.department}: ${this.name}`
//     }
// }
// const manager = new Manager("Alice", 50000, "Engineering");









//* pblm-8
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error('Access Denied: Must be 18 or older'));
      return;
    }
    setTimeout(() => resolve('Access Granted'), 1000);
  });
};

const result = await  validateAgeAsync(10)
console.log(result)

























//   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22   nicher gula kete dite hobe pbl 8 no jonno just test
 async function validateAgeAsync (age: number) : Promise<string> {
    if ( age < 18) {
        throw new Error("Access Denied: Must be 18 or older")
    }
    await new Promise<void>( resolve => {
        setTimeout( ()=> {resolve()},1000)
    })
    return "Access Granted"
}


console.log(await validateAgeAsync(20))

// const runValidation = async (): Promise<void> => {
//   try {
//     const result: string = await validateAgeAsync(10);
//     console.log(result);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// };
// void runValidation();
// =======**************************************************


// const runValidation = async (): Promise<void> => {
//   const result: string = await validateAgeAsync(10);
//   console.log(result);
// };
// void runValidation();


// ====================================
// const validateAgeAsync = async (age: number): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     if (age < 18) {
//       reject(new Error('Access Denied: Must be 18 or older'));
//       return;
//     }
//     setTimeout(() => resolve('Access Granted'), 1000);
//   });
// };
// console.log( validateAgeAsync(20))