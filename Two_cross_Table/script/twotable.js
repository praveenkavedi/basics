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

/* <html>
<head>
<title>Multiplication Table Generator</title>

<script language="javascript" type="text/javascript">

function generateTable()
{
     var myVar = prompt("A number?", "");
     var myString = "";
     for (i=1; i<=6; i++) {
       myString += i+ " x " +myVar+ " = " +(i*myVar)+ "\n";
     }
     alert(myString);
}

</script>

</head>
<body>

<a href="javascript:generateTable()">Create New Table</a>

</body>
</html> */