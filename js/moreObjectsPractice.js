"use strict";
//(function(){
    console.log("More Objects Practice hello");

    const dog = {};
    dog.age = 9;
    dog.breed = 'Doberman';
    dog.bark = function(){
        console.log('Woof');
    };

    








    function makeCar(make, model){
        return {make, model};
    }

    const car1 = makeCar('Kia', 'Rio');
    // console.log(makeCar('VW', 'beetle'));
    //
    // console.log(car1);

    const salesReport = {};
    salesReport.title = 'April Sales Report';
    salesReport.date = new Date();
    salesReport.office = 'CodeUp';
    salesReport.employees = [{employeeNumber: 1, firstName:'Jane', lastName:'Janeway',salesUnit: 3}];
    salesReport.sayOffice = function(){
        console.log("The office name is: " + this.office);
    }
    //salesReport.sayOffice();

    function createEmployee(employeeNumber, firstName, lastName, salesUnit){
        return {employeeNumber, firstName, lastName, salesUnit};
    }
    salesReport.employees.push(createEmployee(13, 'Bob', 'Dole', 6));
    let emp2 = createEmployee(15, 'Mike', 'Twain', 27);
    salesReport.employees.push(emp2);
    //console.log(salesReport.employees);
    salesReport.getEmployeeCount = function(){
        console.log("Total employee count is: " + salesReport.employees.length);
    }

    salesReport.getTotalNumberOfSales = function(){
        let totalSales = 0;
        for(let i = 0; i < salesReport.employees.length;i++){
            totalSales += salesReport.employees[i].salesUnit;
        }
        return totalSales;
    }

    salesReport.getAverageSalesPerEmployee = function() {
        return this.getTotalNumberOfSales() / salesReport.employees.length ;
    }

    //console.log(salesReport);

//})();