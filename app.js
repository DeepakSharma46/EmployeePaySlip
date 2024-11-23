var readEmployeDetails =()=>{
    var empdetails={};
    empdetails.name = $("#eName").val();
    empdetails.age = $("#eAge").val()
    empdetails.gender = document.querySelector('input[name="gender"]:checked').value;
    empdetails.state = $("#estate").val();
    empdetails.department = $('#edepartment').val();
    empdetails.bsalary = parseInt($('#ebSalry').val());
    empdetails.pf = parseInt((14*empdetails.bsalary)/100);
    empdetails.hra = parseInt((24*empdetails.bsalary)/100);
    empdetails.totalSalary = empdetails.pf + empdetails.hra + empdetails.bsalary;
    var temp1 = OnHandSalaryInfo(empdetails.gender,empdetails.totalSalary);
    empdetails.taxPercentage = temp1.taxPercentage;
    empdetails.taxToBePaid = temp1.taxToBePaid;
    empdetails.onHandSalary = temp1.onHandSalary;
    displaypayslip(empdetails);

    
    console.log(empdetails);
    
}

var OnHandSalaryInfo = (gender,totalSalary)=>{
    var taxPercentage = 0;
    if(gender == 'male'){
        if(totalSalary >= 150000){
            taxPercentage = 15;
        }
        else if(totalSalary >= 100000){
            taxPercentage = 10;
        }
        else if(totalSalary >= 50000){
            taxPercentage = 5;
        }
        else{
            taxPercentage = 0;
        }

    }
    else{
        if(totalSalary >= 150000){
            taxPercentage = 10;
        }
        else if(totalSalary >= 100000){
            taxPercentage = 5;
        }
        else{
            taxPercentage = 0;
        }
    }
    var obj2={

    }
    obj2.taxPercentage = taxPercentage;
    obj2.taxToBePaid = (taxPercentage*totalSalary)/100;
    obj2.onHandSalary = totalSalary - obj2.taxToBePaid;
    return obj2;

    
    
}

displaypayslip=(empdetails) =>{
    $("#ename").text(empdetails.name);
    $("#eage").text(empdetails.age);
    $("#egen").text(empdetails.gender);
    $("#estate1").text(empdetails.state);
    $("#edepart").text(empdetails.department);
    $("#ebsalary").text(empdetails.bsalary);
    $("#epf").text(empdetails.pf);
    $("#ehra").text(empdetails.hra);
    $("#etsal").text(empdetails.totalSalary);
    $("#etaxp").text(empdetails.taxToBePaid);
    $("#ehandsal").text(empdetails.onHandSalary + ' RS');

    $(".payslip").show();
}


var handleReset=()=>{
    $(".payslip").hide();
}