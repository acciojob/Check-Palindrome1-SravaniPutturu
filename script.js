// complete the given function

function palindrome(str){
	
	str = str.replace(" ","").toLowerCase()
	return str == str.reverse();
}
module.exports = palindrome
