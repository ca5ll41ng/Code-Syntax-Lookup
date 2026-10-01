---
id: "java-en-function-charsequence-chars"
language: "java"
lang: "en"
category: "function"
name: "CharSequence.chars"
signature: "public default IntStream chars()"
title: "CharSequence.chars"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharSequence.chars

```java
public default IntStream chars()
```

Returns a stream of `int` zero-extending the `char` values
 from this sequence.  Any char which maps to a
 `#unicode surrogate code point` is passed
 through uninterpreted.

 

The stream binds to this sequence when the terminal stream operation
 commences (specifically, for mutable sequences the spliterator for the
 stream is late-binding).
 If the sequence is modified during that operation then the result is
 undefined.

**返回**

- an IntStream of char values from this sequence

> *Since 1.8*
