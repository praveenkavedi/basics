function twocross() 
{
   var tabnum = document.getElementById("tablenumber").value;
    maxnum= document.getElementById("maxnumber").value;
    var resnum = "";
    for (i=1; i<=maxnum; i++) {

        resnum += i+ " x " +tabnum+ " = " +(i*tabnum)+ "\n";
    }
    alert(resnum);
}

