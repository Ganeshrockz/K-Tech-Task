var app= angular.module("mobileApp",[]);

app.controller("mobileCtrl",function($scope){
$scope.displayFunc=function(val){
  var i,ul,li;
  ul=document.getElementById("phoneList");
  li=ul.getElementsByTagName("li");
  for(i=0;i<li.length;i++)
  {

    if(li[i].id===val)
    {
      li[i].style.display="block";
    }
    else {
      li[i].style.display="none";
    }
  }
  };
  $scope.displayAll=function(){
    var i,ul,li;
    ul=document.getElementById("phoneList");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
        li[i].style.display="block";
    }
  };
    $scope.displayRam=function(val){
    var i,ul,li;
    ul=document.getElementById("phoneList");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
      header=li[i].getElementsByTagName("h5");
      ans=parseInt(header[0].id);
      val=parseInt(val);
      if(ans>val)
      {
        li[i].style.display="block";
      }
      else {
        li[i].style.display="none";
      }

    }
  };
    $scope.displayCost=function(val)
  {
    var i,ul,li;
    ul=document.getElementById("phoneList");
    li=ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++)
    {
      head=li[i].getElementsByTagName("h3");
      ans=parseInt(head[0].id);
      val=parseInt(val);
      if(ans>val)
      {
        li[i].style.display="block";
      }
      else {
        li[i].style.display="none";
      }

    }
  };
  $scope.phonelist=[
  { "id":"Samsung",
    "name": "Samsung J7",
   "image": "samsung.jpg"  ,
   "cost": "20000",
   "ram" : "4GB"},
  { "id" : "Samsung",
    "name" : "Samsung S8",
    "image": "samsung2.jpg",
  "cost": "50000",
   "ram": "8GB"},
  { "id": "Micromax",
    "name" : "Micromax Canvas 6",
    "image": "micromax.jpg",
  "cost": "15000",
   "ram": "6GB"},
  { "id" : "Micromax",
    "name" : "Micromax Canvas Knight",
    "image": "micromax2.jpg",
  "cost": "20000",
   "ram": "8GB"}, 
  {"id":"Gionee",
  "name" : "Gionee S7",
    "image": "gionee.jpg",
  "cost": "23000",
   "ram": "6GB"},        
  {"id":"Gionee",
   "name" : "Gionee P7",
    "image": "gionee2.jpg",
  "cost": "11000",
   "ram": "3GB"},   
  { "id": "Oppo",
    "name" : "Oppo R5",
    "image": "oppo.jpg",
  "cost": "23000",
   "ram": "2GB"},
    {"id": "Oppo",
    "name" : "Oppo F3",
    "image": "oppo2.jpg",
  "cost": "14000",
   "ram": "6GB"},
  { "id": "Lenovo",
    "name" : "Lenovo P2",
    "image": "lenovo.jpg",
  "cost": "23000",
   "ram": "3GB"},  
  {"id": "Lenovo",
  "name" : "Lenovo K6 Power",
    "image": "lenovo2.jpg",
  "cost": "33000",
   "ram": "8GB"}, 
  {"id":"Iphone",
   "name" : "Iphone 6",
   "image": "iphone.jpg",
   "cost": "47000",
   "ram": "8GB"}, 
    
  { "id": "Iphone",
    "name" : "Iphone 7",
    "image": "iphone2.jpg",
  "cost": "70000",
   "ram": "8GB"},     
  { "id": "Windows",
    "name" : "Microsoft Lumia 535",
    "image": "microsoft.jpg",
  "cost": "30000",
   "ram": "6GB"},
     { "id":"Windows",
      "name" : "Nokia Lumia 1020",
    "image": "microsoft2.jpg",
  "cost": "45000",
   "ram": "8GB"},   
  ]
});