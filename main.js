
//var n=prompt("Enter the number");
let num = (n)=>{
  let temp=n;
	let b,
  sum=0;
	
	while(n>0){
		b=n%10;
		sum=sum*10+b;
		n=parseInt(n/10);
	}	

	document.write("Reverse of the number is"+" "+sum +"<br>" +"<br>");

	if (temp==sum) {
        document.write("Palindrome");
    }
    else {
       document.write("Not a palindrome");
    }
  }
(num(455))