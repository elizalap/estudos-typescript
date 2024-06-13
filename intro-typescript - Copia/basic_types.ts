// numbers
let name_var: number
name_var = 123;
name_var = 1.2;
name_var = 0xfa;

//booleano
let active: boolean = true
active = false;

//string
let firstName = 'Elias'
let lastName: string = 'Santos'
let fullName: string = `${firstName} ${lastName}`;

// enums
enum ROLES {
   MANAGER = 'Manager',
   ADMIN = 'Admin',
   CEO = 'CEO',
   CTO = 'CTO'
};
console.log(ROLES.CTO)

// arrays
let names = ['Carlos', 'Eti', 'EspecializaTI', true, 1]
let names1: string[] = ['Eliza'];
let name2: Array<string> = ['Carlos'];
let name3: Array<any> = ['Carlos', 123];
