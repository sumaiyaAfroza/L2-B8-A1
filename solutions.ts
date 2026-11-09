

const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === 0) {
    return value * multiplier;
  } else if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};



function processInput (value: string | number | boolean) : string | number {
  if(typeof value === "string") {
   return value.trim().toLowerCase()
  }
  else if (typeof value === "number") {
   return value * 10
  }
  else {
    return value ? "Active" :"Inactive"
  }
}



function formatCoordinate ( coordinate : readonly [number, number, string]) : string {
   const  [latitude, longitude, locationName] = coordinate
   return `Location: ${locationName} (${latitude}, ${longitude})`
}



 function concatenateArrays<T> (...arrays: T[][] ) {
    const combinedArray : T[] = []
    for (const array of arrays) {
       combinedArray.push(...array)
    }
     return combinedArray
 }



interface Course {
    title :string;
    students : number;
   isPublished : boolean
}
function getPopularCourses ( courses: Course[], minStudents: number) : Course[] {
   return courses.filter((course : Course )=> 
   course.isPublished === true && course.students >= minStudents
   )
}




function pluckValues <T, K extends keyof T>(items: T[], key: K ): T[K][]  {
    return items.map((item: T): T[K] => item[key])
}




class Employee {
    constructor(protected name: string,  private baseSalary: number ) {
    }
    getDetails(){
        return  `Employee : ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee{
constructor(name: string, baseSalary: number, private department: string ) {
    super(name, baseSalary);
}
    getRoleInfo(){
    return `Manager of ${this.department}: ${this.name}`
    }
}






const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error('Access Denied: Must be 18 or older'));
      return;
    }
    setTimeout(() => resolve('Access Granted'), 1000);
  });
};

