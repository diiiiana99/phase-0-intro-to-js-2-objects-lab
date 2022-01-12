const employee = {
    name: "Nemo",
    streetAddress: "42 Wallaby Way, Sydney, Australia"
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {... employee};
    newEmployee[key] = value;
    return newEmployee 

}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, streetAddress, newAddress) {
    employee [streetAddress] = newAddress;
    return employee;
}
function deleteFromEmployeeByKey (employee, name) {
    const delEmployee = {... employee};
    delete delEmployee. name ;
    return delEmployee;
}
console.log(employee)
function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee.name;
    return employee;
}
console.log(employee)
