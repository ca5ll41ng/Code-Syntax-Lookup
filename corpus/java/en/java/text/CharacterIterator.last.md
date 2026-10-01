---
id: "java-en-function-characteriterator-last"
language: "java"
lang: "en"
category: "function"
name: "CharacterIterator.last"
signature: "public char last()"
title: "CharacterIterator.last"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterIterator.last

```java
public char last()
```

Sets the position to getEndIndex()-1 (getEndIndex() if the text is empty)
 and returns the character at that position.

**返回**

- the last character in the text, or DONE if the text is empty

**参见**

- #getEndIndex()
