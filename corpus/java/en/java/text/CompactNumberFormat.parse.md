---
id: "java-en-function-compactnumberformat-parse"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.parse"
signature: "public Number parse(String text, ParsePosition pos)"
title: "CompactNumberFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.parse

```java
public Number parse(String text, ParsePosition pos)
```

{@inheritDoc NumberFormat}
 

 The returned value is the numeric part in the given text multiplied
 by the numeric equivalent of the affix attached
 (For example, "K" = 1000 in `US US locale`).
 

 A `CompactNumberFormat` can match
 the default prefix/suffix to a compact prefix/suffix interchangeably.
 

 Parsing can be done in either a strict or lenient manner, by default it is lenient.
 

 Parsing fails when **lenient**, if the prefix and/or suffix are non-empty
 and cannot be found due to parsing ending early, or the first character
 after the prefix cannot be parsed.
 

 Parsing fails when **strict**, if in `text`,
 
   
-  The default or a compact prefix is not found. For example, the `Locale.US` currency format prefix: "`$`"
   
-  The default or a compact suffix is not found. For example, a `Locale.US`
   `SHORT` compact suffix: "`K`"
   
-  `isGroupingUsed` returns `false`, and the grouping
   symbol is found
   
-  `isGroupingUsed` returns `true`, and `getGroupingSize` is not adhered to
   
-  `isParseIntegerOnly` returns `true`, and the decimal
   separator is found
   
-  `isGroupingUsed` returns `true` and `isParseIntegerOnly` returns `false`, and the grouping
   symbol occurs after the decimal separator
   
-  Any other characters are found, that are not the expected symbols,
   and are not digits that occur within the numerical portion
 

 

 When lenient, the minus sign in the `#negative_subpatterns
 negative subpatterns` is loosely matched against lenient minus sign characters.
 

 The subclass returned depends on the value of
 `isParseBigDecimal`.
 
 
- If `isParseBigDecimal` is false (the default),
     most integer values are returned as `Long`
     objects, no matter how they are written: `"17K"` and
     `"17.000K"` both parse to `Long.valueOf(17000)`.
     If the value cannot fit into `Long`, then the result is
     returned as `Double`. This includes values with a
     fractional part, infinite values, `NaN`,
     and the value -0.0.
     

     Callers may use the `Number` methods `doubleValue`,
     `longValue`, etc., to obtain the type they want.

 
- If `isParseBigDecimal` is true, values are returned
     as `BigDecimal` objects. The special cases negative
     and positive infinity and NaN are returned as `Double`
     instances holding the values of the corresponding
     `Double` constants.
 

 

 `CompactNumberFormat` parses all Unicode characters that represent
 decimal digits, as defined by `Character.digit()`. In
 addition, `CompactNumberFormat` also recognizes as digits the ten
 consecutive characters starting with the localized zero digit defined in
 the `DecimalFormatSymbols` object.
 

 `CompactNumberFormat` parse does not allow parsing scientific
 notations. For example, parsing a string `"1.05E4K"` in
 `US US locale` breaks at character 'E'
 and returns 1.05.

**参数**

- **text** — the string to be parsed
- **pos** — a `ParsePosition` object with index and error index information as described above

**返回**

- the parsed value, or `null` if the parse fails

**异常**

- **NullPointerException** — if `text` or `pos` is null
