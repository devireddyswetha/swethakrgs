
function modifyName(target:object,propertyKey: string, propDesc: PropertyDescriptor) : any{
   console.log('target is',target);
   console.log('property key',propertyKey);
   console.log('propDesc is ',propDesc);

   let oldValue = propDesc.value;

   propDesc.value = function() {
       return 'My FullName ' + arguments[0];
   };
   return propDesc
}

function studentDec(target:object,propKey: string) {
   let val = target[propKey];
   let getter = function() {
       return 'CSE'
   }
   let setter = function(newVal) {
      val = newVal;
   }

  Object.defineProperty(target,propKey,{
      set:setter,
      get:getter
  });

  console.log(Object.getOwnPropertyDescriptor(target, propKey));
}




export class Employee {
    
    rollno:number;
    department:string;
    @studentDec
    name:string;
    constructor(
        rollno:number,
        department:string,
        name:string,
    ) {
        this.rollno = rollno,
        this.department = department,
        this.name = name

    }


exams (): number {
    return 50;
}

getUsers (): any {
    console.log('in get fun',this.name);
    return this.name
}

@modifyName
myName(myName): any {
        return this.name;
}
myBranch() {
    return this.department;
}
}