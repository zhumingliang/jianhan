var INTER_FLAG='3';						//�ӿ����ͣ���Ϊ'1'���ʾ�½ӿڣ��½ӿڱ������̻���Կ��ǰ30λPUB32
					//�ӿ����ͣ���Ϊ'1'���ʾ�½ӿڣ��½ӿڱ������̻���Կ��ǰ30λPUB32
var MERCHANTID ='';              //UAT--���÷�����ӿ�
var POSID='';                 //���д���
var BRANCHID=''; 
//var PUB32TR2='4b4e250754a42f894212ac59020113';  //UAT
//var PUB32TR2='a1daf94ff3d9adf87a47fc5d020111';  //SIT
//var PUB32TR2='a1daf94ff3d9adf87a47fc5d020111';  //YZ
var PUB32TR2='';  //SIT

var ORDERID='';//'001';

var PAYMENT='';
var CURCODE='01';
var TXCODE='520100';
var OPERID='';
var AUTHID='';
var PASSWORD='';
var REQUESTSN='';
var REMARK1='';
var REMARK2='';
var PUB32='';
var INSTALLNUM = '';

var CCBCLIENT = '';

/***�����̻�֧��***/
var SMERID = '';
var SMERNAME = '';
var SMERTYPEID = '';
var SMERTYPE = '';
var TRADECODE = '';
var TRADENAME = '';
var PROTYPE = '';
var PRONAME = '';

var ISSINSCODE = '';
var THIRDAPPINFO = '';
var TIMEOUT = '';
var NoCredit = '';//	���������ÿ�
var NoDebit = '';//	�������ǿ�
var USERNAME = '';//	�ͻ�����
var IDNUMBER = '';//	�ͻ�֤������

var bankURL='http://128.128.96.175:8001/app/ccbMain'; //sit
//var bankURL='http://128.128.96.2:8001/app/ccbMain';  //uat
//var bankURL='https://ibsbjstar.ccb.com.cn/app/ccbMain';  //����


//�������ݲ�Ҫ���׸Ķ�
var strMD5;
var URL;
var URL0;//��������֧��
var URL1;//E����֧��

function setValue()
{
	
	var objMERCHANTID=document.getElementById("MERCHANTID");
	objMERCHANTID.value=MERCHANTID;
	
	
	var objPOSID=document.getElementById("POSID");
	objPOSID.value=POSID;	
	
	
	var objBRANCHID=document.getElementById("BRANCHID");
	objBRANCHID.value=BRANCHID;
	
	
	var objORDERID=document.getElementById("ORDERID");
	objORDERID.value=ORDERID;

	
	
	
	var objPAYMENT=document.getElementById("PAYMENT");
	objPAYMENT.value=PAYMENT;
	
	
	
	var objCURCODE=document.getElementById("CURCODE");
	objCURCODE.value=CURCODE;
	
	
	var objTXCODE=document.getElementById("TXCODE");
	objTXCODE.value=TXCODE;
	
	
	var objREMARK1=document.getElementById("REMARK1");
	objREMARK1.value=REMARK1;
	
	
	var objREMARK2=document.getElementById("REMARK2");
	objREMARK2.value=REMARK2;
	
	
	var objbankURL=document.getElementById("bankURL");
	objbankURL.value=bankURL;

	var objISSINSCODE =document.getElementById("ISSINSCODE");
	objISSINSCODE.value=ISSINSCODE;
	
	document.getElementById("PUB32").value=PUB32;
	document.getElementById("PUB32TR2").value = PUB32TR2;
	
	var objsendB=document.getElementById("sendB");
	objsendB.disabled=true;
	//var objsendB2=document.getElementById("sendB2");
	//objsendB2.disabled=true;
	
	/***************�����̻�֧��**************/
	//�����̻�����
	document.getElementById("SMERID").value=SMERID;
	//�����̻�����
	document.getElementById("SMERNAME").value=SMERNAME;
	//�����̻�������
	document.getElementById("SMERTYPEID").value=SMERTYPEID;
	//�����̻��������
	document.getElementById("SMERTYPE").value=SMERTYPE;
	//�������ʹ���
	document.getElementById("TRADECODE").value=TRADECODE;
	//������������
	document.getElementById("TRADENAME").value=TRADENAME;
	//��Ʒ������
	document.getElementById("PROTYPE").value=PROTYPE;
	//��Ʒ�������
	document.getElementById("PRONAME").value=PRONAME;
	
}

function make()
{
	var tmp;
	var tmp0;
	var tmp1;
    var temp_New1;
	MERCHANTID=document.getElementById("MERCHANTID").value;
	POSID=document.getElementById("POSID").value;
	
	
	BRANCHID=document.getElementById("BRANCHID").value;
	
	
	ORDERID=document.getElementById("ORDERID").value;
	
	
	
	PAYMENT=document.getElementById("PAYMENT").value;
	

	CURCODE=document.getElementById("CURCODE").value;
	
	
	TXCODE=document.getElementById("TXCODE").value;
	

	REMARK1=document.getElementById("REMARK1").value;
	
	
	REMARK2=document.getElementById("REMARK2").value;
	
	
	bankURL=document.getElementById("bankURL").value;
	
	INSTALLNUM = document.getElementById("INSTALLNUM").value;
	
	ISSINSCODE = document.getElementById("ISSINSCODE").value;
	//CCBCLIENT = document.getElementById("CCBCLIENT").value;
	
	/***************�����̻�֧��**************/
	//�����̻�����
	SMERID=document.getElementById("SMERID").value;
	//�����̻�����
	SMERNAME=document.getElementById("SMERNAME").value;
	//�����̻�������
	SMERTYPEID=document.getElementById("SMERTYPEID").value;
	//�����̻��������
	SMERTYPE=document.getElementById("SMERTYPE").value;
	//�������ʹ���
	TRADECODE=document.getElementById("TRADECODE").value;
	//������������
	TRADENAME=document.getElementById("TRADENAME").value;
	//��Ʒ������
	PROTYPE=document.getElementById("PROTYPE").value;
	//��Ʒ�������
	PRONAME=document.getElementById("PRONAME").value;
	
	THIRDAPPINFO = document.getElementById("THIRDAPPINFO").value;
	
	TIMEOUT = document.getElementById("TIMEOUT").value;
	
	//NoCredit = document.getElementById("NoCredit").value;;//	���������ÿ�
    //NoDebit = document.getElementById("NoDebit").value;;//	�������ǿ�
	//USERNAME = document.getElementById("USERNAME").value;;//	�ͻ�����
	//IDNUMBER = document.getElementById("IDNUMBER").value;;//	�ͻ�֤������

    
	tmp ='MERCHANTID='+MERCHANTID+'&POSID='+POSID+'&BRANCHID='+BRANCHID+'&ORDERID='+ORDERID+'&PAYMENT='+PAYMENT+'&CURCODE='+CURCODE+'&TXCODE='+TXCODE+'&REMARK1='+REMARK1+'&REMARK2='+REMARK2;
	tmp0='MERCHANTID='+MERCHANTID+'&POSID='+POSID+'&BRANCHID='+BRANCHID+'&ORDERID='+ORDERID+'&PAYMENT='+PAYMENT+'&CURCODE='+CURCODE+'&TXCODE=520100'+'&REMARK1='+REMARK1+'&REMARK2='+REMARK2;
	
	index=document.getElementById("INTER_FLAG").value;
	temp_New=tmp;
	//alert("�ӿ�����Ϊ��"+index+"  (1Ϊ�½ӿ����ͣ�����Ϊ�ɽӿ�����)");

	if(index=="3"){
		temp_New=tmp+'&TYPE=1&PUB='+document.getElementById("PUB32TR2").value+'&GATEWAY='+document.getElementById("GATEWAY").value+'&CLIENTIP='+document.getElementById("CLIENTIP").value+'&REGINFO='+escape(document.getElementById("REGINFO").value)+'&PROINFO='+escape(document.getElementById("PROINFO").value)+'&REFERER='+document.getElementById("MER_REFERER").value;
		temp_New1=tmp+'&TYPE=1&GATEWAY='+document.getElementById("GATEWAY").value+'&CLIENTIP='+document.getElementById("CLIENTIP").value+'&REGINFO='+escape(document.getElementById("REGINFO").value)+'&PROINFO='+escape(document.getElementById("PROINFO").value)+'&REFERER='+document.getElementById("MER_REFERER").value;
		if(INSTALLNUM != ""){
			temp_New = temp_New +'&INSTALLNUM='+INSTALLNUM;
			temp_New1 = temp_New1 +'&INSTALLNUM='+INSTALLNUM;
		}
		if(SMERID != ""){
			temp_New = temp_New + '&SMERID='+SMERID+'&SMERNAME='+escape(SMERNAME)+'&SMERTYPEID='+SMERTYPEID+'&SMERTYPE='+escape(SMERTYPE)+'&TRADECODE='+TRADECODE+'&TRADENAME='+escape(TRADENAME)+'&SMEPROTYPE='+PROTYPE+'&PRONAME='+escape(PRONAME);
			temp_New1 = temp_New1 + '&SMERID='+SMERID+'&SMERNAME='+escape(SMERNAME)+'&SMERTYPEID='+SMERTYPEID+'&SMERTYPE='+escape(SMERTYPE)+'&TRADECODE='+TRADECODE+'&TRADENAME='+escape(TRADENAME)+'&SMEPROTYPE='+PROTYPE+'&PRONAME='+escape(PRONAME);
		}
		if(THIRDAPPINFO != ""){
			temp_New = temp_New +'&THIRDAPPINFO='+THIRDAPPINFO;
			temp_New1 = temp_New1 +'&THIRDAPPINFO='+THIRDAPPINFO;
		}
		if(TIMEOUT != ""){
			temp_New = temp_New +'&TIMEOUT='+TIMEOUT;
			temp_New1 = temp_New1 +'&TIMEOUT='+TIMEOUT;
		}
		
		if(ISSINSCODE != ""){
			temp_New = temp_New +'&ISSINSCODE='+ISSINSCODE;
			temp_New1 = temp_New1 +'&ISSINSCODE='+ISSINSCODE;
		}
		if(NoCredit != ""){
			temp_New = temp_New +'&NoCredit='+NoCredit;
			temp_New1 = temp_New1 +'&NoCredit='+NoCredit;
		}
		if(NoDebit != ""){
			temp_New = temp_New +'&NoDebit='+NoDebit;
			temp_New1 = temp_New1 +'&NoDebit='+NoDebit;
		}
		if(USERNAME != "" && IDNUMBER != ""){
			temp_New = temp_New +'&USERNAME='+escape(USERNAME);
			temp_New1 = temp_New1 +'&USERNAME='+escape(USERNAME);
			temp_New = temp_New +'&IDNUMBER='+escape(IDNUMBER);
			temp_New1 = temp_New1 +'&IDNUMBER='+escape(IDNUMBER);
		}

	}
	alert(temp_New);
	//document.getElementById("showID").innerHTML=temp_New;
	strMD5=hex_md5(temp_New);
    
	URL3 = bankURL+'?'+temp_New1+'&MAC='+strMD5;
    
    document.getElementById("result").value=URL;

	document.getElementById("MAC").value=strMD5;
	
	//document.getElementById("URL01").value=URL0+'||'+URL1;

  //���ύ��ť
  if (index=="3" || index=="4")
{
 document.getElementById("result").value=URL3;
 //document.getElementById("loacl").href=URL3;
}
	
	document.getElementById("sendB").disabled=false;
	//document.getElementById("sendB2").disabled=false;

  //���MD5���ɰ�ť
    
    document.getElementById("makeMd5").disabled=true;
}

function go( sendUrl)
{

	
	var objMD5form=document.getElementById("MD5form2");
	
	objMD5form.method="post";
    var index=document.getElementById("INTER_FLAG").value;
 	if(index==2)
		objMD5form.action=bankURL+'?CCB_IBSVersion=V5';
	   //objMD5form.action=bankURL;
 	else
		objMD5form.action=sendUrl;


	objMD5form.submit();

}
function go2(sendUrl){
	var a =document.getElementById("loacl");
	var index=document.getElementById("INTER_FLAG").value;
 	if(index==2){
		a.href =bankURL+'?CCB_IBSVersion=V5';
 	}else{
		a.href =sendUrl;
	}
}

function go3(sendUrl){
	sendUrl = sendUrl.substring(1,sendUrl.length);
	mbspay.directpay(sendUrl);
}

function go4(sendUrl){
     alert("IOS");
	 window.location="mbspay://direct"+sendUrl;
}

function newRest()
{
   window.MD5form.sendB.disabled =true ;
   window.MD5form.makeMd5.disabled = false;

   window.MD5form.MERCHANTID.value=MERCHANTID;
   window.MD5form.POSID.value=POSID;
   window.MD5form.BRANCHID.value=BRANCHID;
   window.MD5form.ORDERID.value=ORDERID;
   window.MD5form.PAYMENT.value=PAYMENT;
   window.MD5form.CURCODE.value=CURCODE;
   window.MD5form.TXCODE.value=TXCODE;
   window.MD5form.REMARK1.value=REMARK1;
   window.MD5form.REMARK2.value=REMARK2;
   window.MD5form.bankURL.value=bankURL;
   //window.MD5form.reset();
}

function DOTYPE_onclick()
{
var index=MD5form.INTER_FLAG.selectedIndex;
var value=MD5form.INTER_FLAG.options[index].value;
if (value==0)
{
}else if(value==1){

}
else if(value==3){
document.getElementById("PUB32TR").style.display='none';
document.getElementById("PUB32TR1").style.display='';
document.getElementById("GATEWAYTR").style.display='';
document.getElementById("CLIENTIPTR").style.display='';
document.getElementById("REGINFOTR").style.display='';
document.getElementById("PROINFOTR").style.display='';
document.getElementById("MER_REFERERTR").style.display='';

//document.getElementById("STOREINFOTR").style.display='none';
//document.getElementById("PROTYPETR").style.display='none';
}
else if(value==4){

}

}