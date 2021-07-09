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

    function test() {
        console.log("test");
    }
}

StaffSalary.func = function() { //在构造函数的原型上添加方法
    console.log("This is an static method.");
}

salaryData.forEach(item=>{
    // let salarySalary = new StaffSalary(item.name,item.basic,item.position,item.tax);
    let salarySalary = Object.assign(new StaffSalary(),item);
    StaffSalary.func();
    console.log(`${salarySalary.name} の給料総額金額：${salarySalary.calculateTotal()}元,手取り：${salarySalary.calculateNoTaxTotal()}元。`);
});



// StaffSalary.test();