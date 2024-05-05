export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string")
    }
    
    if (word === "") {
      return false
    }
    
    const lowercaseWord = word.toLowerCase()
    const reversedWord = lowercaseWord.split('').reverse().join('');

    return lowercaseWord === reversedWord;
  }