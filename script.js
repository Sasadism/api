async function send(){

const prompt=document.getElementById("prompt").value;

const messages=document.getElementById("messages");

messages.innerHTML+=`<div class="user">👤 ${prompt}</div>`;

const res=await fetch("/api/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"gpt-5.5",

messages:[
{
role:"user",
content:prompt
}
]

})

});

const data=await res.json();

messages.innerHTML+=`<div class="ai">🤖 ${
data.choices?.[0]?.message?.content
?? JSON.stringify(data)
}</div>`;

messages.scrollTop=messages.scrollHeight;

}
