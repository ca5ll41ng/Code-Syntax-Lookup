---
id: "java-en-function-compactnumberformat-formattocharacteriterator"
language: "java"
lang: "en"
category: "function"
name: "CompactNumberFormat.formatToCharacterIterator"
signature: "public AttributedCharacterIterator formatToCharacterIterator(Object obj)"
title: "CompactNumberFormat.formatToCharacterIterator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CompactNumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompactNumberFormat.formatToCharacterIterator

```java
public AttributedCharacterIterator formatToCharacterIterator(Object obj)
```

Formats an Object producing an `AttributedCharacterIterator`.
 The returned `AttributedCharacterIterator` can be used
 to build the resulting string, as well as to determine information
 about the resulting string.
 

 Each attribute key of the `AttributedCharacterIterator` will
 be of type `NumberFormat.Field`, with the attribute value
 being the same as the attribute key. The prefix and the suffix
 parts of the returned iterator (if present) are represented by
 the attributes `PREFIX` and
 `SUFFIX` respectively.

**参数**

- **obj** — The object to format

**返回**

- an `AttributedCharacterIterator` describing the formatted value

**异常**

- **NullPointerException** — if obj is null
- **IllegalArgumentException** — when the Format cannot format the given object
- **ArithmeticException** — if rounding is needed with rounding mode being set to `RoundingMode.UNNECESSARY`
