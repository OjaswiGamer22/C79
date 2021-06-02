var studentarray=[];
function give(){
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;
    studentarray.push(name_1);
    studentarray.push(name_2);
    studentarray.push(name_3);
 studentarray.push(name_4);
document.getElementById("sow").innerHTML=studentarray;
document.getElementById("submit").style.display="none";
document.getElementById("sor").style.display="inline-block";


}
function sorting(){
    studentarray.sort();
    document.getElementById("sow").innerHTML=studentarray;
}
