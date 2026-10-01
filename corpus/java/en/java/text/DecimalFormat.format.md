---
id: "java-en-function-decimalformat-format"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormat.format"
signature: "public final StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition pos)"
title: "DecimalFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormat.format

```java
public final StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition pos)
```

Formats a number and appends the resulting text to the given string
 buffer.
 The number can be of any subclass of `java.lang.Number`.

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
