---
id: "java-en-function-charsequence-codepoints"
language: "java"
lang: "en"
category: "function"
name: "CharSequence.codePoints"
signature: "public default IntStream codePoints()"
title: "CharSequence.codePoints"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharSequence.codePoints

```java
public default IntStream codePoints()
```

Returns a stream of code point values from this sequence.  Any surrogate
 pairs encountered in the sequence are combined as if by `toCodePoint Character.toCodePoint` and the result is passed
 to the stream. Any other code units, including ordinary BMP characters,
 unpaired surrogates, and undefined code units, are zero-extended to
 `int` values which are then passed to the stream.

 

The stream binds to this sequence when the terminal stream operation
 commences (specifically, for mutable sequences the spliterator for the
 stream is late-binding).
 If the sequence is modified during that operation then the result is
 undefined.

**返回**

- an IntStream of Unicode code points from this sequence

> *Since 1.8*
