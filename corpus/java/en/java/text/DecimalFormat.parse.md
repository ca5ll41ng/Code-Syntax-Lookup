---
id: "java-en-function-decimalformat-parse"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormat.parse"
signature: "public Number parse(String text, ParsePosition pos)"
title: "DecimalFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormat.parse

```java
public Number parse(String text, ParsePosition pos)
```

{@inheritDoc NumberFormat}
 

 Parsing can be done in either a strict or lenient manner, by default it is lenient.
 

 Parsing fails when **lenient**, if the prefix and/or suffix are non-empty
 and cannot be found due to parsing ending early, or the first character
 after the prefix cannot be parsed.
 

 Parsing fails when **strict**, if in `text`,
 
   
-  The prefix is not found. For example, a `Locale.US` currency
   format prefix: "`$`"
   
-  The suffix is not found. For example, a `Locale.US` percent
   format suffix: "`%`"
   
-  `isGroupingUsed` returns `true`, and `getGroupingSize` is not adhered to
   
-  `isGroupingUsed` returns `false`, and the grouping
   symbol is found
   
-  `isGroupingUsed` returns `true` and the grouping
   symbol occurs after the decimal separator
   
-  Any other characters are found, that are not the expected symbols,
   and are not digits that occur within the numerical portion
 

 

 When lenient, the minus sign in the `#negative_subpatterns
 negative subpatterns` is loosely matched against lenient minus sign characters.
 

 The subclass returned depends on the value of `isParseBigDecimal`
 as well as on the string being parsed.
 
   
- If `isParseBigDecimal()` is false (the default),
       most integer values are returned as `Long`
       objects, no matter how they are written: `"17"` and
       `"17.000"` both parse to `Long(17)`.
       Values that cannot fit into a `Long` are returned as
       `Double`s. This includes values with a fractional part,
       infinite values, `NaN`, and the value -0.0.
       `DecimalFormat` does not decide whether to
       return a `Double` or a `Long` based on the
       presence of a decimal separator in the source string. Doing so
       would prevent integers that overflow the mantissa of a double,
       such as `"-9,223,372,036,854,775,808.00"`, from being
       parsed accurately.
       

       Callers may use the `Number` methods
       `doubleValue`, `longValue`, etc., to obtain
       the type they want.
   
- If `isParseBigDecimal()` is true, values are returned
       as `BigDecimal` objects. The values are the ones
       constructed by `BigDecimal`
       for corresponding strings in locale-independent format. The
       special cases negative and positive infinity and NaN are returned
       as `Double` instances holding the values of the
       corresponding `Double` constants.
 

 

 `DecimalFormat` parses all Unicode characters that represent
 decimal digits, as defined by `Character.digit()`. In
 addition, `DecimalFormat` also recognizes as digits the ten
 consecutive characters starting with the localized zero digit defined in
 the `DecimalFormatSymbols` object.

**参数**

- **text** — the string to be parsed
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- the parsed value, or `null` if the parse fails

**异常**

- **NullPointerException** — if `text` or `pos` is null.
