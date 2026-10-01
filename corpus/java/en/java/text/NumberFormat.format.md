---
id: "java-en-function-numberformat-format"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.format"
signature: "public StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition pos)"
title: "NumberFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.format

```java
public StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition pos)
```

Formats a number and appends the resulting text to the given string
 buffer.
 The number can be of any subclass of `java.lang.Number`.
 

 This implementation extracts the number's value using
 `longValue` for all integral type values that
 can be converted to `long` without loss of information,
 including `BigInteger` values with a
 `bitLength() bit length` of less than 64,
 and `doubleValue` for all other types. It
 then calls
 `format`
 or `format`.
 This may result in loss of magnitude information and precision for
 `BigInteger` and `BigDecimal` values.

**参数**

- **number** — the number to format
- **toAppendTo** — the `StringBuffer` to which the formatted text is to be appended
- **pos** — keeps track on the position of the field within the returned string. For example, for formatting a number `1234567.89` in `Locale.US` locale, if the given `fieldPosition` is `INTEGER_FIELD`, the begin index and end index of `fieldPosition` will be set to 0 and 9, respectively for the output string `1,234,567.89`.

**返回**

- the value passed in as `toAppendTo`

**异常**

- **IllegalArgumentException** — if `number` is null or not an instance of `Number`.
- **NullPointerException** — if `toAppendTo` or `pos` is null
- **ArithmeticException** — if rounding is needed with rounding mode being set to RoundingMode.UNNECESSARY

**参见**

- java.text.FieldPosition
