const json = '[{"name":"張さん","basic":5000,"position":1000,"tax":200},{"name":"李さん","basic":6000,"position":2000,"tax":500},{"name":"王さん","basic":7000,"position":3000,"tax":800}]';
const salaryData= JSON.parse(json);

function StaffSalary(name,basic,position,tax) {
    this. name = name;
    this.basic = basic;
    this.position = position;
    this.tax = tax;

    this.calculateTotal = function () {
        return this.basic + this.position;
    }

    this.calculateNoTaxTotal = function () {
        return this.calculateTotal() - this.tax;
    }
 
}
StaffSalary.func = function () {
    console.log("aaa");
}
StaffSalary.prototype.func1 = function () {
    console.log("bbb");
}



salaryData.forEach(item=>{
    //  let salarySalary = new StaffSalary(item.name,item.basic,item.position,item.tax);
     let salary = Object.assign(new StaffSalary(),item);
     StaffSalary.func();
     salary.func1();
    console.log(`${salary.name} の給料総額金額：${salary.calculateTotal()}元,手取り：${salary.calculateNoTaxTotal()}元。`);
});



// StaffSalary.test();