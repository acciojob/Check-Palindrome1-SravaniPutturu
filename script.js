// complete the given function

function palindrome(str){
	
	str = str.replace(" ","").toLowerCase()
	return str == str.split("").reverse().join("");
}
module.exports = palindrome
