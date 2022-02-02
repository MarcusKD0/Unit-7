const send = document.getElementById('send');
const text = document.getElementById('text');
const search = document.getElementById('search');




send.addEventListener('click', e =>{
text.value = ''
search.value = ''
alert('Message Sent')
});
