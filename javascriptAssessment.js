/*var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click', calculate, false);*/


//calculate the users salary less personal allowance
var personalAllowance = 11000;
var salaryLessAllowance = 0;
var tax20Percent = 0;
var tax40Percent = 0;
var amountTaxedAt20 = 32000;
var netSalary = 0;

var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click', calculate, false);


//calculate salary tax
function calculate()
{
    //display the gross salary of the user
    var grossSalary = parseInt(document.getElementById("input1").value);
    var additionalTax = 0;
    
    //Telling to the machine that if the gross salary is  greater than sum of 32K and 11K so apply the tax at 20 and 40%
    if (grossSalary > 43000)
        {
            //assign to the variable the subtraction between user salary and personal allowance
            salaryLessAllowance = grossSalary - personalAllowance;

            //calculate tax on 20 and 40%
            tax20Percent =  32000 * 20 / 100;
            tax40Percent = (salaryLessAllowance - 32000) * 40 / 100;
            
            //calculate and display the net salary
            netSalary = grossSalary - tax20Percent - tax40Percent;
            
            showSalary(grossSalary, personalAllowance, tax20Percent, tax40Percent, netSalary);
            
        }
    //instead if the users salary is equal or smaller than the sum of allowance and 32k apply just the tax at 20%
    else if (grossSalary > (personalAllowance))
        {
            //assign to the variable the subtraction between user salary and personal allowance
            salaryLessAllowance = grossSalary - personalAllowance;
             //calculate tax on 20%
            tax20Percent = salaryLessAllowance * 20 / 100;
            
            //calculate and display the net salary
            netSalary = grossSalary - tax20Percent;
            showSalary(grossSalary, personalAllowance, tax20Percent, tax40Percent, netSalary,tax45Percent);
        }
    //at the end if the users salary is equal to personal allowance don't apply any tax
    else
        {
            showSalary(grossSalary, personalAllowance, tax20Percent, tax40Percent, netSalary);
        }
}

//Display on different row all the detail of the salary tax calculation
function showSalary (grossSalary, personalAllowance, tax20Percent, tax40Percent, netSalary)
{
            document.getElementById("salaryGross").innerHTML = grossSalary + " £";
            document.getElementById("allowance").innerHTML = personalAllowance + " £";
            document.getElementById("tax20Percent").innerHTML = tax20Percent + " £";
            document.getElementById("tax40Percent").innerHTML = tax40Percent + " £";
            document.getElementById("resultSalary").innerHTML = netSalary + " £";
    
}


