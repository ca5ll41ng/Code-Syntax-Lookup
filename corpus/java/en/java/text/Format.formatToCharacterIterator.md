---
id: "java-en-function-format-formattocharacteriterator"
language: "java"
lang: "en"
category: "function"
name: "Format.formatToCharacterIterator"
signature: "public AttributedCharacterIterator formatToCharacterIterator(Object obj)"
title: "Format.formatToCharacterIterator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Format.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Format.formatToCharacterIterator

```java
public AttributedCharacterIterator formatToCharacterIterator(Object obj)
```

Formats an Object producing an `AttributedCharacterIterator`.
 You can use the returned `AttributedCharacterIterator`
 to build the resulting String, as well as to determine information
 about the resulting String.
 

 Each attribute key of the AttributedCharacterIterator will be of type
 `Field`. It is up to each `Format` implementation
 to define what the legal values are for each attribute in the
 `AttributedCharacterIterator`, but typically the attribute
 key is also used as the attribute value.

 `AttributedCharacterIterator` with meaningful attributes.
 `AttributedCharacterIterator` with no attributes.

**参数**

- **obj** — The object to format

**返回**

- AttributedCharacterIterator describing the formatted value.

**异常**

- **NullPointerException** — if obj is null.
- **IllegalArgumentException** — when the Format cannot format the given object.

> *Since 1.4*
