const email_me = document.getElementById("email_me");
console.log(email_me)

email_me.addEventListener("click", send_email)

let subject_content = "¡Trabajemos en un proyecto!"

function send_email(){
    window.open(`mailto:benjaminmq2013@gmail.com?subject=${subject_content}`);
}