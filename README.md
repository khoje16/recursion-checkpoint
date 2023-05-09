# recursion-checkpoint
In this code, the isPalindrome function takes a word as input and returns true if it is a palindrome and false otherwise. The function first cleans the input word by converting it to lowercase and removing any non-alphabetic characters. It then checks if the length of the cleaned word is less than or equal to 1, which is the base case for the recursion. If the word is empty or a single character, it is a palindrome by definition, so the function returns true.
For longer words, the function checks if the first and last characters of the cleaned word are the same. If they are, it calls itself recursively on the substring between the first and last characters (excluding those characters themselves). If they are not the same, the word is not a palindrome and the function returns false. The recursion continues until the base case is reached, at which point the function returns true if all previous recursive calls returned true (indicating that the entire word is a palindrome) or false otherwise.
