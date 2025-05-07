**Roman Numeral Converter**  
Convert any number between 1 and 3999 into its Roman numeral representation with live UI validation and feedback.  
This project demonstrates DOM manipulation, input validation, and use of control flow with real-time UI interaction.

**Link to project:** https://ayushsaxena0.github.io/roman-numeral-converter/

![Roman Numeral Converter Screenshot](https://raw.githubusercontent.com/ayushsaxena0/roman-numeral-converter/main/img/roman-converter.png)  
*Alt tag: Screenshot of Roman Numeral Converter web interface*

**How It's Made:**  
**Tech used:** HTML, CSS, JavaScript

This project was built using vanilla JavaScript for logic and DOM interaction. A form captures user input, which is validated and then converted into Roman numerals using a cleanly structured array of numeral mappings. JavaScript `forEach` and `while` loops are used to iterate over the mappings and build the result string. Classes are dynamically added or removed to show styling feedback based on user input errors or valid results.

**Optimizations** *(optional)*  
I refactored the numeral conversion logic to use object destructuring and a `while` loop to handle repeating numerals (like "III" for 3 or "XXX" for 30). This significantly improved readability and functionality over an earlier `if`-based approach. Input is converted to a number once to avoid type coercion issues.

**Lessons Learned:**  
While building this, I learned how powerful simple control structures like loops can be when paired with clean data structures like arrays of objects. I also got more comfortable with using `classList` to toggle UI states and with best practices for user input validation. It was a fun challenge turning a historical number system into functional JavaScript logic!
