---
id: "java-en-function-simpledateformat-formattocharacteriterator"
language: "java"
lang: "en"
category: "function"
name: "SimpleDateFormat.formatToCharacterIterator"
signature: "public AttributedCharacterIterator formatToCharacterIterator(Object obj)"
title: "SimpleDateFormat.formatToCharacterIterator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/SimpleDateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleDateFormat.formatToCharacterIterator

```java
public AttributedCharacterIterator formatToCharacterIterator(Object obj)
```

Formats an Object producing an `AttributedCharacterIterator`.
 You can use the returned `AttributedCharacterIterator`
 to build the resulting String, as well as to determine information
 about the resulting String.
 

 Each attribute key of the AttributedCharacterIterator will be of type
 `DateFormat.Field`, with the corresponding attribute value
 being the same as the attribute key.

**参数**

- **obj** — The object to format

**返回**

- AttributedCharacterIterator describing the formatted value.

**异常**

- **NullPointerException** — if obj is null.
- **IllegalArgumentException** — if the Format cannot format the given object, or if the Format's pattern string is invalid.

> *Since 1.4*
