---
id: "java-en-function-characteriterator-next"
language: "java"
lang: "en"
category: "function"
name: "CharacterIterator.next"
signature: "public char next()"
title: "CharacterIterator.next"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterIterator.next

```java
public char next()
```

Increments the iterator's index by one and returns the character
 at the new index.  If the resulting index is greater or equal
 to getEndIndex(), the current index is reset to getEndIndex() and
 a value of DONE is returned.

**返回**

- the character at the new position or DONE if the new position is off the end of the text range.
