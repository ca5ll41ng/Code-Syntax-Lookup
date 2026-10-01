---
id: "java-en-function-characteriterator-setindex"
language: "java"
lang: "en"
category: "function"
name: "CharacterIterator.setIndex"
signature: "public char setIndex(int position)"
title: "CharacterIterator.setIndex"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterIterator.setIndex

```java
public char setIndex(int position)
```

Sets the position to the specified position in the text and returns that
 character.

**参数**

- **position** — the position within the text.  Valid values range from getBeginIndex() to getEndIndex().  An IllegalArgumentException is thrown if an invalid value is supplied.

**返回**

- the character at the specified position or DONE if the specified position is equal to getEndIndex()
