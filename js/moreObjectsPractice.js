"use strict";
(function(){
    console.log("More Objects Practice hello");

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
    salesReport.sayOffice();

    function createEmployee(employeeNumber, firstName, lastName, salesUnit){
        return {employeeNumber, firstName, lastName, salesUnit};
    }
    salesReport.employees.push(createEmployee(13, 'Bob', 'Dole', 5));

    //console.log(salesReport);

})();