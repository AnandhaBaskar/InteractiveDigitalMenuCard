function ordered(){
    let t=document.getElementById("t");
    t.innerText="your ordered has been placed";
    let btn=document.getElementById("btn");
    btn.style.display="none";
}
function ordered1(){
    let t1=document.getElementById("t1");
    t1.innerText="your ordered has been placed";
    let btn1=document.getElementById("btn1");
    btn1.style.display="none";
}
function ordered2(){
    let t2=document.getElementById("t2");
    t2.innerText="your ordered has been placed";
    let btn2=document.getElementById("btn2");
    btn2.style.display="none";
 }
function ordered3(){
    let t3=document.getElementById("t3");
    t3.innerText="your ordered has been placed";
    let btn3=document.getElementById("btn3");
    btn3.style.display="none";
}       
function ordered4()
{
    let t4=document.getElementById("t4");
    t4.innerText="your ordered has been placed";
    let btn4=document.getElementById("btn4");
    btn4.style.display="none";
}
function ordered5(){
    let t5=document.getElementById("t5");
    t5.innerText="your ordered has been placed";
    let btn5=document.getElementById("btn5");
    btn5.style.display="none";
}
    
function ordered6(){
    let t6=document.getElementById("t6");
    t6.innerText="your ordered has been placed";
    let btn6=document.getElementById("btn6");
    btn6.style.display="none";
}
function ordered7()
{
    let t7=document.getElementById("t7");
    t7.innerText="your ordered has been placed";
    let btn7=document.getElementById("btn7");
    btn7.style.display="none";
}
function ordered8(){
    let t8=document.getElementById("t8");
    t8.innerText="your ordered has been placed";
    let btn8=document.getElementById("btn8");
    btn8.style.display="none";
    }
function ordered9(){
    let t9=document.getElementById("t9");
    t9.innerText="your ordered has been placed";
    let btn9=document.getElementById("btn9");
    btn9.style.display="none";
}
function ordered10(){
    let t10=document.getElementById("t10");
    t10.innerText="your ordered has been placed";
    let btn10=document.getElementById("btn10");
    btn10.style.display="none";
}
function ordered11(){
    let t11=document.getElementById("t11");
    t11.innerText="your ordered has been placed";
    let btn11=document.getElementById("btn11");
    btn11.style.display="none";
}
function ordered12(){
    let t12=document.getElementById("t12");
    t12.innerText="your ordered has been placed";
    let btn12=document.getElementById("btn12");
    btn12.style.display="none";
}
function ordered13(){
    let t13=document.getElementById("t13");
    t13.innerText="your ordered has been placed";
    let btn13=document.getElementById("btn13");
    btn13.style.display="none";
}
function ordered14(){
    let t14=document.getElementById("t14");
    t14.innerText="your ordered has been placed";
    let btn14=document.getElementById("btn14");
    btn14.style.display="none";
}
function ordered15(){
    let t15=document.getElementById("t15");
    t15.innerText="your ordered has been placed";
    let btn15=document.getElementById("btn15");
    btn15.style.display="none";
}
function ordered16(){
    let t16=document.getElementById("t16");
    t16.innerText="your ordered has been placed";
    let btn16=document.getElementById("btn16");
    btn16.style.display="none";
}
function ordered17(){
    let t17=document.getElementById("t17");
    t17.innerText="your ordered has been placed";
    let btn17=document.getElementById("btn17");
    btn17.style.display="none";
}
function ordered18(){
    let t18=document.getElementById("t18");
    t18.innerText="your ordered has been placed";
    let btn18=document.getElementById("btn18");
    btn18.style.display="none";
}
            
function bill()
{
    let d=new Date();
    let date=d.getDate();
    let m=d.getMonth();
    let month=m+1;
    let year=d.getFullYear();
    let hour=d.getHours();
    let min=d.getMinutes();
    
   
    let idly=document.getElementById("idly").value;
    let minidly=document.getElementById("minidly").value;
    let dosa=document.getElementById("dosa").value;
    let ravadosa=document.getElementById("ravadosa").value;
    let masaladosa=document.getElementById("masaladosa").value;
    let onionuttapam=document.getElementById("onionuttapam").value;
    let tea=document.getElementById("tea").value;
    let coffee=document.getElementById("coffee").value;
    let chappathi=document.getElementById("chappathi").value;
    let poori=document.getElementById("poori").value;
    let vada=document.getElementById("vada").value;
    let salad=document.getElementById("salad").value;
    let sandwitch=document.getElementById("sandwitch").value;
    let kesari=document.getElementById("kesari").value;
    let ravakichadi=document.getElementById("ravakichadi").value;
    let appam=document.getElementById("appam").value;
    let idiyappam=document.getElementById("idiyappam").value;
    let kerala_special_puttu=document.getElementById("kerala_special_puttu").value;
    let venpongal=document.getElementById("venpongal").value;
    // let name=document.getElementById("name").value;

    let idly_price=idly*60;
    let minidly_price=minidly*70;
    let dosa_price=dosa*65;
    let ravadosa_price=ravadosa*70;
    let masaladosa_price=masaladosa*75;
    let onionuttapam_price=onionuttapam*80;
    let tea_price=tea*20;
    let coffee_price=coffee*20;
    let chappathi_price=chappathi*55;
    let poori_price=poori*60;
    let vada_price=vada*30;
    let salad_price=salad*120;
    let sandwitch_price=sandwitch*100;
    let kesari_price=kesari*40;
    let ravakichadi_price=ravakichadi*50;
    let appam_price=appam*70
    let idiyappam_price=idiyappam*75;
    let kerala_special_puttu_price=kerala_special_puttu*200;
    let venpongal_price=venpongal*45;
    let total=idly_price+minidly_price+dosa_price+ravadosa_price+masaladosa_price+onionuttapam_price+tea_price+coffee_price+chappathi_price+poori_price+vada_price+salad_price+sandwitch_price+kesari_price+ravakichadi_price+appam_price+idiyappam_price+kerala_special_puttu_price+venpongal_price;
    // let sum=a+b+c+da+e+f+g+h+i+j+k+l+ma+n+o+p+q+r+s;
    // var logo=new Image();
    //  logo.src="logo.png";
    //  document.writeln("<center><img src='logo.png'  height='160px' width='300px'></center>");
    // document.write(name);
    document.write("<h2>$****************ARSHITHA RESTAURANT****************$</h2>");
    document.write("<center>no.208,Lawrence Road,</center>");
    document.write("<center>cuddalore.</center>");
    document.write("<center>Ph:9093895643,9085986578</center>");
    document.write("<center>email:arshitarestaurant@gmail.com</center>");
    document.write("Date:",date,"-",month,"-",year,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Time:",hour,":",min,"hrs");
    document.write("<h2>$********************************************************$</h2>");
    document.write("<table border='0' width='700' cellspacing='0' >");
    document.write("<tr>");
    document.write("<td><b>Description</b></td>");
    document.write("<td><b>Qty</b></td>");
    document.write("<td><b>Rate</b></td>");
    document.write("<td><b>Amount</b></td>");
    document.write("</tr>");
    if(idly>0)
    {
        document.write("<tr>");
        document.write("<td>Idly</td>");
        document.write("<td> " +idly+"</td>");
        document.write("<td>60</td>");
        document.write("<td> " +idly_price+"</td>");
        document.write("</tr>");
    }
    
    if(minidly>0)
    {
        document.write("<tr>");
        document.write("<td>Mini Idly</td>");
        document.write("<td> " +minidly+"</td>");
        document.write("<td>70</td>");
        document.write("<td> " +minidly_price+"</td>");
        document.write("</tr>");
       
    }
    if(dosa>0)
    {
        document.write("<tr>");
        document.write("<td>Dosa</td>");
        document.write("<td> " +dosa+"</td>");
        document.write("<td>65</td>");
        document.write("<td> " +dosa_price+"</td>");
        document.write("</tr>");
       
    }
    if(ravadosa>0)
    {
        document.write("<tr>");
        document.write("<td>Rava Dosa</td>");
        document.write("<td> " +ravadosa+"</td>");
        document.write("<td>70</td>");
        document.write("<td> " +ravadosa_price+"</td>");
        document.write("</tr>");
        
    }
    if(masaladosa>0)
    {
        document.write("<tr>");
        document.write("<td>Masala Dosa</td>");
        document.write("<td> " +masaladosa+"</td>");
        document.write("<td>75</td>");
        document.write("<td> " +masaladosa_price+"</td>");
        document.write("</tr>");
       
    }
    if(onionuttapam>0)
    {
        document.write("<tr>");
        document.write("<td>Onion Uttampam</td>");
        document.write("<td> " +onionuttapam+"</td>");
        document.write("<td>80</td>");
        document.write("<td> " +onionuttapam_price+"</td>");
        document.write("</tr>");
       
    }
    if(tea>0)
    {
        document.write("<tr>");
        document.write("<td>tea</td>");
        document.write("<td> " +tea+"</td>");
        document.write("<td>20</td>");
        document.write("<td> " +tea_price+"</td>");
        document.write("</tr>");
       
    }
    if(coffee>0)
    {
        document.write("<tr>");
        document.write("<td>Coffee</td>");
        document.write("<td> " +coffee+"</td>");
        document.write("<td>20</td>");
        document.write("<td> " +coffee_price+"</td>");
        document.write("</tr>");
        
    }
    if(chappathi_price>0)
    {
        document.write("<tr>");
        document.write("<td>Chappathi</td>");
        document.write("<td> " +chappathi+"</td>");
        document.write("<td>55</td>");
        document.write("<td> " +chappathi_price+"</td>");
        document.write("</tr>");
       
    }
    
    if(poori>0)
    {
        document.write("<tr>");
        document.write("<td>Poori Set</td>");
        document.write("<td> " +poori+"</td>");
        document.write("<td>60</td>");
        document.write("<td> " +poori_price+"</td>");
        document.write("</tr>");
        
    }
    if(vada>0)
    {
        document.write("<tr>");
        document.write("<td>Vada</td>");
        document.write("<td> " +vada+"</td>");
        document.write("<td>30</td>");
        document.write("<td> " +vada_price+"</td>");
        document.write("</tr>");
       
    }
    if(salad>0)
    {
        document.write("<tr>");
        document.write("<td>Veg Salad</td>");
        document.write("<td> " +salad+"</td>");
        document.write("<td>1200</td>");
        document.write("<td> " +salad_price+"</td>");
        document.write("</tr>");
        
    }
    if(sandwitch>0)
    {
        document.write("<tr>");
        document.write("<td>Sandwitch</td>");
        document.write("<td> " +sandwitch+"</td>");
        document.write("<td>100</td>");
        document.write("<td> " +sandwitch_price+"</td>");
        document.write("</tr>");
       
    }
    if(kesari>0)
    {
        document.write("<tr>");
        document.write("<td>Rava Kesari</td>");
        document.write("<td> " +kesari+"</td>");
        document.write("<td>40</td>");
        document.write("<td> " +kesari_price+"</td>");
        document.write("</tr>");
       
    }
    if(ravakichadi>0)
    {
        document.write("<tr>");
        document.write("<td>Rava Kichadi</td>");
        document.write("<td> " +ravakichadi+"</td>");
        document.write("<td>50</td>");
        document.write("<td> " +ravakichadi_price+"</td>");
        document.write("</tr>");
        
    }
    if(appam>0)
    {
        document.write("<tr>");
        document.write("<td>Appam</td>");
        document.write("<td> " +appam+"</td>");
        document.write("<td>70</td>");
        document.write("<td> " +appam_price+"</td>");
        document.write("</tr>");
        
    }
    if(idiyappam>0)
    {
        document.write("<tr>");
        document.write("<td>Idiyappam</td>");
        document.write("<td> " +idiyappam+"</td>");
        document.write("<td>75</td>");
        document.write("<td> " +idiyappam_price+"</td>");
        document.write("</tr>");
        
    }
    if(kerala_special_puttu>0)
    {
        document.write("<tr>");
        document.write("<td>Kerala Special Puttu</td>");
        document.write("<td> " +kerala_special_puttu+"</td>");
        document.write("<td>200</td>");
        document.write("<td> " +kerala_special_puttu_price+"</td>");
        document.write("</tr>");
        
    }
    if(venpongal>0)
    {
        document.write("<tr>");
        document.write("<td>Ven Pongal</td>");
        document.write("<td> " +venpongal+"</td>");
        document.write("<td>45</td>");
        document.write("<td> " +venpongal_price+"</td>");
        document.write("</tr>");
        
    }
    document.write("<tr>");
    document.write("<td><b>TOTAL</b></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td><b> " +total+"</b></td>");
    document.write("</tr>");
    document.write("</table>");
    document.write("<h2>$********************************************************$</h2>");
   
   
    document.writeln("<h2><center><br>Thank You<br>Visit Again</center></h2>");
    window.print();
    

    // window.print();
   
   
}
// var image1=new Image();
// image1.src="dosa.jpg";
// var image1=new Image();
// image1.src="wall.jpeg";
// document.writeln("<img src='dosa.jpg'  height='160px' width='300px'>");
// document.writeln(" <body  background='wall.jpeg' width='100%' height='100%'>")
