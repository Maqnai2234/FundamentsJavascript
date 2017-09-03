function platzom(str) {
  let translation = str

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe"
  }

  const lenghtTranslation = translation.length
  if (lenghtTranslation >= 10) {
    const firstHalf = translation.slice(0, Math.round(lenghtTranslation / 2))
    const secondHalf = translation.slice(Math.round(lenghtTranslation / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  if(isPalindrome(str)){
    translation = minusMayusStr(str);
  }
  return translation;
}

function isPalindrome(str){
  return str.toLowerCase() == reverse(str.toLowerCase())
}

function minusMayusStr(str){
  let arr = str.split('')
  let flag = true
  for (let i in arr) {
    arr[i] = (flag) ? arr[i].toUpperCase() : arr[i].toLowerCase()
    flag = !flag
  }
  return arr.join('')
}

const reverse = (str) => {
  let arr = str.split('').reverse().join('')
  return arr
}

console.log(platzom("Programar"))
console.log(platzom("Zorro"))
console.log(platzom("Zarpar"))
console.log(platzom("Abecedario"))
console.log(platzom("Sobreverbos"))
