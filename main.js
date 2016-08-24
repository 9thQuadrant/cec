var branch=null;
hideload();
function hideload()
{
$(window).mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 20);
    var amountMovedY = (e.pageY * -1 / 20);
    $('#background').css({'background-position': amountMovedX + 'px ' + amountMovedY + 'px'});
});

	switchback();
$('#loading').delay(500).animate({'margin-top':'-110%'},800,'swing').hide(0);
$('#branch').delay(1000).show(400);
$('#branch .rules').delay(1000).animate({'margin-top':'3%','opacity':'1'},500,'swing');

$('#register #uploadme').on('change', function () {
  $('#register #upload').attr('value',this.value.replace(/.*[\/\\]/, ''));
});
}
function change(b)
{
	switchback();
branch=b;
switch(branch){
	case 'cse':$('#register h1').fadeOut(500).html('Computer Science and engineering').fadeIn(500);break;
	case 'me':$('#register h1').fadeOut(500).html('Mechanical engineering').fadeIn(500);break;
	case 'eee':$('#register h1').fadeOut(500).html('Electrical').fadeIn(500);break;
	case 'ece':$('#register h1').fadeOut(500).html('Electronics').fadeIn(500);break;
	case 'ce':$('#register h1').fadeOut(500).html('Civil Engineering').fadeIn(500);break;		
	}
$('#register .regBox').fadeOut(200).delay(200).fadeIn(200);
	
}

function gotoRegistration(b){

branch=b;
	switchback();
	$('#branch').delay(500).animate({'margin-top':'110%'},800,'swing').hide(0);
	
	switch(branch){
	case 'cse':$('#register h1').html('Computer Science and engineering');break;
	case 'me':$('#register h1').html('Mechanical engineering');break;
	case 'eee':$('#register h1').html('Electrical');break;
	case 'ece':$('#register h1').html('Electronics');break;
	case 'ce':$('#register h1').html('Civil Engineering');break;		
	}
	$('#register').show().delay(500).animate({'margin-top':'0%'},800,'swing');
	$('#register .regBox').delay(1000).animate({'width':'40%'},500);

$('#register #upload')
	.click(function(){
					$('#register #uploadme').click();});
	

}

function gotoSuccess(n,branch){
	switchback();
	$('#register').delay(500).animate({'margin-top':'110%'},800,'swing').hide(0);
	$('#final').show().delay(500).animate({'margin-top':'0%'},800,'swing');
	$('#final h1 #branchname').html(branch);
	$('#final h1 #number').html(n);$('#final #branchname_c').html(branch);
	$('#final .wing').html(branch);$('#final #number_c').html(n);
	$('#final .printBox').delay(800).animate({'width':'60%'},800);
	
	
	}
function uploadtophp(){
name=$('#register #name').val();
email=$('#register #email').val();
topic=$('#register #topic').val();
phone=$('#register #phone').val();
var file_data = $('#register #uploadme').prop('files')[0];
if(!name){
$('#register #name').attr('placeholder','can we know your name?').css({'border-color':'red'}).focus();
return;
}

if(!topic)
{
$('#register #topic').attr('placeholder','give a title to seminar').css({'border-color':'red'}).focus();
return;	
}

if(!email)
{
$('#register #email').attr('placeholder',"don't you have a mail?").css({'border-color':'red'}).focus();
return;	
}

if(!phone && phone.length!=10)
{
$('#register #phone').attr('placeholder',"enter valid number").css({'border-color':'red'}).val('').focus();

return;	
}

if(!file_data)
{
$('#register #upload').attr('value','hey, upload a file...').css({'border-color':'red'});
$('#register #uploadme').click();
return;	
}


$('#register .proceed').attr('disabled','true').attr('value','Uploading...');

    var file_data = $('#register #uploadme').prop('files')[0];   
    var form_data = new FormData();          
    form_data.append('file', file_data);
    $.ajax({
                url: 'http://192.168.0.110/br/college/upload.php?name='+name+'&email='+email+'&topic='+topic+'&branch='+branch+'&phone='+phone, 
                data: form_data,
				contentType:false,
				cache:false,
                type: 'post',
				processData:false,
                success: function(r){
                    gotoSuccess(r,branch); // display response from the PHP script, if any
                },
				error: function(e){alert(e.message);}
     });

}


function switchback()
{
$('#background').fadeOut(500).delay(1000).fadeIn(800);
}
