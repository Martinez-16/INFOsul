var msg = "aprendemos" // tem q ter a, o,d

var subs=msg
.replace (/a/g,"@")
.replace (/o/g,"!")
.replace (/d/g,"#")

console.log("original=", msg)
console.log("modificado=",subs)