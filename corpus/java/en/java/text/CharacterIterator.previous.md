---
id: "java-en-function-characteriterator-previous"
language: "java"
lang: "en"
category: "function"
name: "CharacterIterator.previous"
signature: "public char previous()"
title: "CharacterIterator.previous"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterIterator.previous

```java
public char previous()
```

Decrements the iterator's index by one and returns the character
 at the new index. If the current index is getBeginIndex(), the index
 remains at getBeginIndex() and a value of DONE is returned.

**返回**

- the character at the new position or DONE if the current position is equal to getBeginIndex().
