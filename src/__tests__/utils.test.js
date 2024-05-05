import {isPalindrome} from "../utils"

describe ("isPalindrome",()=>{
    it("should return true if a word is a palindrome",()=>{
        expect(isPalindrome("racecar")).toBe(true)
    })

    it("should return false if a word is not a palindrome",()=>{
        expect(isPalindrome("car")).toBe(false)
    })

    it("should return true if a palindrome is a combination of uppercase and lowercase letters",()=>{
        expect(isPalindrome("RacEcAr")).toBe(true)
    })

    it("should return false if input is an empty string",()=>{
        expect(isPalindrome("")).toBe(false)
    })
})
