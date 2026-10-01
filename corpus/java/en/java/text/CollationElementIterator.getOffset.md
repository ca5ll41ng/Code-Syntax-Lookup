---
id: "java-en-function-collationelementiterator-getoffset"
language: "java"
lang: "en"
category: "function"
name: "CollationElementIterator.getOffset"
signature: "public int getOffset()"
title: "CollationElementIterator.getOffset"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationElementIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationElementIterator.getOffset

```java
public int getOffset()
```

Returns the character offset in the original text corresponding to the next
 collation element.  (That is, getOffset() returns the position in the text
 corresponding to the collation element that will be returned by the next
 call to next().)  This value will always be the index of the FIRST character
 corresponding to the collation element (a contracting character sequence is
 when two or more characters all correspond to the same collation element).
 This means if you do setOffset(x) followed immediately by getOffset(), getOffset()
 won't necessarily return x.

**返回**

- The character offset in the original text corresponding to the collation element that will be returned by the next call to next().

> *Since 1.2*
