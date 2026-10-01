---
id: "java-en-function-bigdecimal-tostring"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.toString"
signature: "public String toString()"
title: "BigDecimal.toString"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.toString

```java
public String toString()
```

Returns the string representation of this `BigDecimal`,
 using scientific notation if an exponent is needed.

 

A standard canonical string form of the `BigDecimal`
 is created as though by the following steps: first, the
 absolute value of the unscaled value of the `BigDecimal`
 is converted to a string in base ten using the characters
 `'0'` through `'9'` with no leading zeros (except
 if its value is zero, in which case a single `'0'`
 character is used).

 

Next, an adjusted exponent is calculated; this is the
 negated scale, plus the number of characters in the converted
 unscaled value, less one.  That is,
 `-scale+(ulength-1)`, where `ulength` is the
 length of the absolute value of the unscaled value in decimal
 digits (its precision).

 

If the scale is greater than or equal to zero and the
 adjusted exponent is greater than or equal to `-6`, the
 number will be converted to a character form without using
 exponential notation.  In this case, if the scale is zero then
 no decimal point is added and if the scale is positive a
 decimal point will be inserted with the scale specifying the
 number of characters to the right of the decimal point.
 `'0'` characters are added to the left of the converted
 unscaled value as necessary.  If no character precedes the
 decimal point after this insertion then a conventional
 `'0'` character is prefixed.

 

Otherwise (that is, if the scale is negative, or the
 adjusted exponent is less than `-6`), the number will be
 converted to a character form using exponential notation.  In
 this case, if the converted `BigInteger` has more than
 one digit a decimal point is inserted after the first digit.
 An exponent in character form is then suffixed to the converted
 unscaled value (perhaps with inserted decimal point); this
 comprises the letter `'E'` followed immediately by the
 adjusted exponent converted to a character form.  The latter is
 in base ten, using the characters `'0'` through
 `'9'` with no leading zeros, and is always prefixed by a
 sign character `'-'` ('&#92;u002D') if the
 adjusted exponent is negative, `'+'`
 ('&#92;u002B') otherwise).

 

Finally, the entire string is prefixed by a minus sign
 character `'-'` ('&#92;u002D') if the unscaled
 value is less than zero.  No sign character is prefixed if the
 unscaled value is zero or positive.

 

**Examples:**
 

For each representation [unscaled value, scale]
 on the left, the resulting string is shown on the right.
 
```

 [123,0]      "123"
 [-123,0]     "-123"
 [123,-1]     "1.23E+3"
 [123,-3]     "1.23E+5"
 [123,1]      "12.3"
 [123,5]      "0.00123"
 [123,10]     "1.23E-8"
 [-123,12]    "-1.23E-10"
 
```

 **Notes:**
 

 
- There is a one-to-one mapping between the distinguishable
 `BigDecimal` values and the result of this conversion.
 That is, every distinguishable `BigDecimal` value
 (unscaled value and scale) has a unique string representation
 as a result of using `toString`.  If that string
 representation is converted back to a `BigDecimal` using
 the `BigDecimal` constructor, then the original
 value will be recovered.

 
- The string produced for a given number is always the same;
 it is not affected by locale.  This means that it can be used
 as a canonical string representation for exchanging decimal
 data, or as a key for a Hashtable, etc.  Locale-sensitive
 number formatting and parsing is handled by the `java.text.NumberFormat` class and its subclasses.

 
- The `toEngineeringString` method may be used for
 presenting numbers with exponents in engineering notation, and the
 `setScale(int,RoundingMode) setScale` method may be used for
 rounding a `BigDecimal` so it has a known number of digits after
 the decimal point.

 
- The digit-to-character mapping provided by
 `Character.forDigit` is used.

**返回**

- string representation of this `BigDecimal`.

**参见**

- Character#forDigit
- #BigDecimal(java.lang.String)
