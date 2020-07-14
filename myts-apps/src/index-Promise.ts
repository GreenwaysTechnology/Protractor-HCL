

 class Employee{
     id:number;
     name:string;
     isActive?:boolean;
 }
function getEmployee():Promise<Employee>{
   let employee:Employee= {
        id:1,
        name:'Subramanian',
        isActive: true
    }
    return Promise.resolve(employee);
}

//return Promise of array of employees
//findAll():Promise<Employee[]> | findAll():Promise<Array<Employee>>
function findAll():Promise<Array<Employee>> {
    const empList:Array<Employee> = [{
        id:1,
        name:'Subramanian',
        isActive: true
    },
    {
        id:1,
        name:'Subramanian',
        isActive: true
    }
    ];
    return Promise.resolve(empList);
}


async function process(){
   const emp = await getEmployee();
   const list = await findAll();
   console.log(emp);
   console.log(list);
}
process();