---
id: "java-en-function-stringcharacteriterator-setindex"
language: "java"
lang: "en"
category: "function"
name: "StringCharacterIterator.setIndex"
signature: "public char setIndex(int p)"
title: "StringCharacterIterator.setIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/StringCharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringCharacterIterator.setIndex

```java
public char setIndex(int p)
```

Implements CharacterIterator.setIndex() for String.

**异常**

- **IllegalArgumentException** — if `p` is not within the bounds (inclusive) of `getBeginIndex` to `getEndIndex`

**参见**

- CharacterIterator#setIndex
