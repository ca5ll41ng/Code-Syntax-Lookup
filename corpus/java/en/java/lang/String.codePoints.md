---
id: "java-en-function-string-codepoints"
language: "java"
lang: "en"
category: "function"
name: "String.codePoints"
signature: "public IntStream codePoints()"
title: "String.codePoints"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.codePoints

```java
public IntStream codePoints()
```

Returns a stream of code point values from this sequence.  Any surrogate
 pairs encountered in the sequence are combined as if by `toCodePoint Character.toCodePoint` and the result is passed
 to the stream. Any other code units, including ordinary BMP characters,
 unpaired surrogates, and undefined code units, are zero-extended to
 `int` values which are then passed to the stream.

**返回**

- an IntStream of Unicode code points from this sequence

> *Since 9*
