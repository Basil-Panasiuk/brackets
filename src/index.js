module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let ob = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|'
  }
  let st = [];
  let b = [')',']','}','|'];
  
  for ( let i=0; i< arr.length; i++){

    if( b.includes(arr[i]) ) {
      if(st[st.length-1] == ob[arr[i]]) {
        st.pop();
      } else {
        st.push(arr[i]);
      }
    } else {
      st.push(arr[i]);
    }
  }

  return st.length == 0;

}
