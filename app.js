let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("demo");

function calculateAge(){
    let birthDate=new Date(userInput.value);
    let y1=birthDate.getFullYear();
    let m1=birthDate.getMonth()+1;
    let d1=birthDate.getDate();

    let today=new Date();
    let y2=today.getFullYear();
    let m2=today.getMonth()+1;
    let d2=today.getDate();

    let y3,m3,d3;
    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else
    {
        y3--;
        m3=12-m1+m2;
    }
    if(d2>=d1)
    {
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1)-d1+d2;
    }
    if(m3<0){
        y3--;
        m3=11;
    }
    result.innerHTML=`You are now ${y3} years ${m3} months and ${d3} days old`;

}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
