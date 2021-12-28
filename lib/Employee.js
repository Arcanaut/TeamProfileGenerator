class Employee {
    constructor(name, id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //returns name from input
getName(){
    return this.name;
}
//returns ID from input
getId(){
return this.id;
}
//returns email from input
getEmail(){
    return this.email;
}
//returns Role from input, but displays 'Employee'
getRole(){
    return 'Employee';
}
};
//exports class
module.exports = Employee;

