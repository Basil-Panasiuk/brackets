module.exports = function check(str, bracketsConfig) {

  brCon = bracketsConfig.map( item => item.join('') );

  while(str.length!= 0) {
    let k = 0;
    for(let i = 0; i < brCon.length; i++) {
      if(str.includes(brCon[i]) ) {
        str = str.replace(brCon[i], '');
        k++;
      }
    }

    if(k === 0) {
      break;
    }
  }

  return str.length === 0;

}
