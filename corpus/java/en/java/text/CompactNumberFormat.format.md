---
id: "java-en-function-compactnumberformat-format"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.format"
signature: "public final StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition fieldPosition)"
title: "CompactNumberFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.format

```java
public final StringBuffer format(Object number, StringBuffer toAppendTo, FieldPosition fieldPosition)
```

Formats a number to produce a string representing its compact form.
 The number can be of any subclass of `java.lang.Number`.

**参数**

- **number** — the number to format
- **toAppendTo** — the `StringBuffer` to which the formatted text is to be appended
- **fieldPosition** — keeps track on the position of the field within the returned string. For example, for formatting a number `123456789` in the `US US locale`, if the given `fieldPosition` is `INTEGER_FIELD`, the begin index and end index of `fieldPosition` will be set to 0 and 3, respectively for the output string `123M`. Similarly, positions of the prefix and the suffix fields can be obtained using `PREFIX` and `SUFFIX` respectively.

**返回**

- the `StringBuffer` passed in as `toAppendTo`

**异常**

- **IllegalArgumentException** — if `number` is `null` or not an instance of `Number`
- **NullPointerException** — if `toAppendTo` or `fieldPosition` is `null`
- **ArithmeticException** — if rounding is needed with rounding mode being set to `RoundingMode.UNNECESSARY`

**参见**

- FieldPosition
