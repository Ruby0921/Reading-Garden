*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Microsoft YaHei",sans-serif;
}

body{

background:#dff5ff;

overflow:hidden;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

}

.background{

position:absolute;

width:100%;

height:100%;

overflow:hidden;

}

.sun{

position:absolute;

top:30px;

right:40px;

font-size:60px;

animation:float 3s infinite ease-in-out;

}

.cloud{

position:absolute;

background:white;

border-radius:50px;

opacity:.8;

}

.cloud:before,
.cloud:after{

content:"";

position:absolute;

background:white;

border-radius:50%;

}

.cloud1{

width:120px;

height:40px;

top:60px;

left:50px;

}

.cloud1:before{

width:50px;
height:50px;
left:10px;
top:-20px;

}

.cloud1:after{

width:60px;
height:60px;
right:10px;
top:-30px;

}

.cloud2{

width:100px;

height:35px;

top:120px;

right:80px;

}

.cloud3{

width:140px;

height:45px;

bottom:180px;

left:100px;

}

.grass{

position:absolute;

bottom:0;

width:100%;

height:120px;

background:#79d45b;

border-top-left-radius:100% 40px;

border-top-right-radius:100% 40px;

}

.container{

position:relative;

z-index:10;

text-align:center;

}

.logo{

font-size:55px;

color:#2d8cff;

margin-bottom:10px;

}

.subtitle{

font-size:24px;

color:#666;

margin-bottom:30px;

}

.book{

position:relative;

margin:auto;

width:250px;

height:280px;

}

.rabbit{

position:absolute;

left:-70px;

top:30px;

font-size:70px;

animation:float 2s infinite;

}

.book-cover{

background:white;

border-radius:25px;

box-shadow:0 10px 25px rgba(0,0,0,.2);

padding:30px;

height:100%;

}

.book-title{

font-size:32px;

color:#4a90e2;

font-weight:bold;

}

.book-name{

font-size:28px;

margin-top:15px;

color:#ff7f50;

font-weight:bold;

}

.book-icon{

font-size:90px;

margin-top:30px;

}

button{

margin-top:40px;

padding:18px 70px;

font-size:30px;

border:none;

border-radius:60px;

background:#ffb300;

color:white;

font-weight:bold;

cursor:pointer;

box-shadow:0 8px 15px rgba(0,0,0,.2);

animation:pulse 1.5s infinite;

}

button:hover{

transform:scale(1.05);

}

@keyframes pulse{

0%{transform:scale(1);}
50%{transform:scale(1.08);}
100%{transform:scale(1);}

}

@keyframes float{

0%{transform:translateY(0);}
50%{transform:translateY(-10px);}
100%{transform:translateY(0);}

}
