---
id: "java-en-function-string-chars"
language: "java"
lang: "en"
category: "function"
name: "String.chars"
signature: "public IntStream chars()"
title: "String.chars"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.chars

```java
public IntStream chars()
```

Returns a stream of `int` zero-extending the `char` values
 from this sequence.  Any char which maps to a `#unicode surrogate code point` is passed through
 uninterpreted.

**返回**

- an IntStream of char values from this sequence

> *Since 9*
