function isPalindrome(word) {
  // Convert word to lowercase and remove non-alphabetic characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  
  // Base case: empty or single character string is a palindrome
  if (cleanWord.length <= 1) {
    return true;
  }
  
  // Recursive case: check first and last characters, then call isPalindrome on substring
  if (cleanWord.charAt(0) === cleanWord.charAt(cleanWord.length - 1)) {
    return isPalindrome(cleanWord.substring(1, cleanWord.length - 1));
  } else {
    return false;
  }
}

// Test the function with some examples
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true
