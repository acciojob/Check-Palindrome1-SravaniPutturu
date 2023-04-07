// complete the given function

function palindrome(str){
	str = str.replace(" ","")
	return str == str.reverse();
}
module.exports = palindrome
