function rot13(str) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let retStr = '';
    for (let i = 0; i < str.length; i++) {
        let lett = str[i]
        if (alpha.includes(lett)) {
            retStr += alpha[((alpha.indexOf(lett)+13)%26)]
        } else if (alpha.includes(lett.toLowerCase())) {
            retStr += alpha[((alpha.indexOf(lett.toLowerCase())+13)%26)].toUpperCase()
        }else {
            retStr += lett
        }
    }
return retStr;
}


console.log(rot13('Grfg'))