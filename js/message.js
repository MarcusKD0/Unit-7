const send = document.getElementById('send');
const text = document.getElementById('text');
const search = document.getElementById('search');




send.addEventListener('click', e =>{

if (text.value === '' && search.value === '') {
  alert('Please fill out the empty fields');
  search.style.borderColor = 'red'
  text.style.borderColor = 'red'
}
  else if (search.value === '') {
    alert('Please fill out the empty field');
    search.style.borderColor = 'red'
  }
    else if (text.value==='') {
      alert('Please fill out the empty field');
      text.style.borderColor = 'red'
}

    else {
      text.value = ''
      text.style.borderColor = 'rgb(118, 118, 118)'
      search.value = ''
      search.style.borderColor = 'rgb(118, 118, 118)'
      alert('Message Sent')
}
});
