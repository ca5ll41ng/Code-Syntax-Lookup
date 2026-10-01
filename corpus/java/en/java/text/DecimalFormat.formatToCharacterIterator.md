---
id: "java-en-function-decimalformat-formattocharacteriterator"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormat.formatToCharacterIterator"
signature: "public AttributedCharacterIterator formatToCharacterIterator(Object obj)"
title: "DecimalFormat.formatToCharacterIterator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormat.formatToCharacterIterator

```java
public AttributedCharacterIterator formatToCharacterIterator(Object obj)
```

Formats an Object producing an `AttributedCharacterIterator`.
 You can use the returned `AttributedCharacterIterator`
 to build the resulting String, as well as to determine information
 about the resulting String.
 

 Each attribute key of the AttributedCharacterIterator will be of type
 `NumberFormat.Field`, with the attribute value being the
 same as the attribute key.

**参数**

- **obj** — The object to format

**返回**

- AttributedCharacterIterator describing the formatted value.

**异常**

- **NullPointerException** — if obj is null.
- **IllegalArgumentException** — when the Format cannot format the given object.
- **ArithmeticException** — if rounding is needed with rounding mode being set to RoundingMode.UNNECESSARY

> *Since 1.4*
