
//validation contact form  
function validateForm() 
{
	var a = document.getElementById("field_firstname").value;
	var b = document.getElementById("field_lastname").value;
	var c = document.getElementById("field_email").value;
	var d = document.getElementById("field_mobile").value;
	var e = document.getElementById("field_message").value;
	var refname = /^[a-zA-Z ]{2,30}$/; 
	var relname = /^[a-zA-Z ]{2,30}$/;
	var remail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var renumber = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/;

while(a != "" || b != "" || c != "" || d != "" || e != "")
{
	if(!refname.test(a))
		{
			alert("Please enter your First name in the required format");
			return false;
			document.getElementById('field_firstname').focus();
		}
	else
		{
			document.getElementById("clear_fname").innerHTML = document.getElementById("field_firstname").value + " "+ "valid";
		}
	if(!relname.test(b))
		{
			alert("Please enter your Last name in the required format");
			return false;
			document.getElementById('field_lastname').focus();
		}
	else
		{
			document.getElementById("clear_lname").innerHTML = document.getElementById("field_lastname").value + " " + "valid";
		}
		
	if(!remail.test(c))
		{
			alert("Please enter your Email address in the required format");
			return false;
			document.getElementById('field_email').focus();
		}
	else
		{
			document.getElementById("clear_email").innerHTML = document.getElementById("field_email").value + " " + "valid";
		}
	if(!renumber.test(d))
		{
			alert("Please enter your Phone number");
			return false;
			document.getElementById('field_mobile').focus();
		}
	else
		{
			document.getElementById("clear_mobile").innerHTML = document.getElementById("field_mobile").value + " " + "valid";
		}
	if(e >200 || e < 20)
		{
			alert("Please Type the message");
			return false;
			document.getElementById('field_message').focus();
		}
	else
		{
			document.getElementById("clear_message").innerHTML = document.getElementById("field_message").value + " " + "valid";
		}
	return true;
}
alert("Every field must be filled out");
return false;
}

// validation function for newsletter form
function SubmitNewsletter()
{
	var x = document.getElementById("fullName_nl").value;
	var y = document.getElementById("email_nl").value;
	var remail_nl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var refullname = /^[a-zA-Z ]{2,30}$/;
	while(x != "" || y != "")
	{
	 if(!refullname.test(document.getElementById("fullName_nl").value))
		{
			alert("Please enter your First name in the required format");
			return false;
			document.getElementById('fullName_nl').focus();
		}
	else
		{
			alert(" Full name Valid");
		}
	if(!remail_nl.test(document.getElementById("email_nl").value))
		{
			alert("Please enter your Email address in the required format");
			return false;
			document.getElementById('email_nl').focus();
		}
	else
		{
			alert(" Email address Valid");
		}
	if(document.getElementById('newletter').checked)
		{
			alert(" Daily Newsletter checkbox Checked");
		}
	else
		{
			alert(" Daily Newsletter checkbox NOT checked");
			return false;
		}
	return true;
	}
alert("Every field must be filled out");
return false;
}

// validation function quizz 1 radio buttons
function Submit_quizz1()
{
	
	if((document.getElementById('aboutus').checked == true || document.getElementById('homepage').checked == true || document.getElementById('contactpage').checked == true) && (document.getElementById('shypet').checked == true || document.getElementById('notthing').checked == true || document.getElementById('love').checked == true) && (document.getElementById('disease').checked == true || document.getElementById('tumor').checked == true ||document.getElementById('fav_object').checked == true))
		{  
			alert(" Question 1.1 Question 1.2 Question 1.3  answer selected");
			return true;
		} 
	else
		{
			alert("One answer for each Question must be given before submition");
			return false;
		}
}	
// validation function quizz 2 radio buttons
function Submit_quizz2()
{
	
	if((document.getElementById('posi').checked == true || document.getElementById('nega').checked == true || document.getElementById('none').checked == true) && (document.getElementById('vet_contact').checked == true || document.getElementById('emergencynum').checked == true || document.getElementById('wait').checked == true) && (document.getElementById('head').checked == true || document.getElementById('sc').checked == true ||document.getElementById('bladder').checked == true))
		{  
			alert(" Question 2.1 Question 2.2 Question 2.3  answer selected");
			return true;
		} 
	else
		{
			alert("One answer for each Question must be given before submition");
			return false;
		}
}	

// validation function quizz 3 radio buttons
function Submit_quizz3()
{
	
	if((document.getElementById('positive').checked == true || document.getElementById('negative').checked == true || document.getElementById('neither').checked == true) && (document.getElementById('neck').checked == true || document.getElementById('ear').checked == true || document.getElementById('run').checked == true) && (document.getElementById('negav').checked == true || document.getElementById('posit').checked == true ||document.getElementById('possibility').checked == true))
		{  
			alert(" Question 3.1 Question 3.2 Question 3.3  answer selected");
			return true;
		} 
	else
		{
			alert("One answer for each Question must be given before submition");
			return false;
		}
}	
function confirmReset()
{
	var x = confirm("Are you sure you want to reset all text?");
	if (x == true)
		{
			form.reset();
		}	
	else
	{
		return false;
	}
}
