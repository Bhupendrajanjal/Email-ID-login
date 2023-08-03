var cl = console.log;

let db=[
    {
        email:"bhupendrajanjal7788@gmailcom",
        Passworld:"123456",
    }
]

const loginform = document.getElementById('formgroup');
const emailcontrol = document.getElementById("email")
const Passworldcontrol = document.getElementById("Passworld");

const onlogin = (eve)=>{
    eve.preventDefault();
    cl("submitted")
    
    setTimeout(()=>{
        let emailval = emailcontrol.value;
        let Passworldval = Passworldcontrol.value;
       
    let isemailexist ;
    db.forEach(acc=>{
        if(emailval===acc.email){
            isemailexist=acc;
          
        }
    })
    eve.target.reset()
 
    cl(isemailexist)
    if(isemailexist){
        //check passworld
        if(isemailexist.Passworld === Passworldval){
            cl("submitted")
           redirectToDashboard()
          
              
        }else{
            Swal.fire({
                imageUrl: "https://previews.123rf.com/images/tigatelu/tigatelu1411/tigatelu141100038/33887243-sad-smiley-emoticon-cartoon.jpg"
    ,           imageHeight: 200,
                imageWeight:400,
                title:"Invalid Email And Passworld !!!!",
                imageAlt: 'A tall image'
              },3000)
        }


    }
    else{
        Swal.fire({
            imageUrl: "https://previews.123rf.com/images/tigatelu/tigatelu1411/tigatelu141100038/33887243-sad-smiley-emoticon-cartoon.jpg"
,           imageHeight: 200,
            imageWeight:400,
            title:"Invalid Email Passworld !!!",
            imageAlt: 'A tall image'
          },3000)
    }


    },2000)
}


function redirectToDashboard(){
   window.location.href='dashedboared2.html'
  

}

loginform .addEventListener("submit",onlogin)