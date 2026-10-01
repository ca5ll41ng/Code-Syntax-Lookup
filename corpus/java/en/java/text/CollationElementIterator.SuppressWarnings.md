---
id: "java-en-function-collationelementiterator-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "CollationElementIterator.SuppressWarnings"
signature: "@SuppressWarnings(\"deprecation\") // getBeginIndex, getEndIndex and setIndex are deprecated public void setOffset(int newOffset)"
title: "CollationElementIterator.SuppressWarnings"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationElementIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationElementIterator.SuppressWarnings

```java
@SuppressWarnings("deprecation") // getBeginIndex, getEndIndex and setIndex are deprecated public void setOffset(int newOffset)
```

Sets the iterator to point to the collation element corresponding to
 the specified character (the parameter is a CHARACTER offset in the
 original string, not an offset into its corresponding sequence of
 collation elements).  The value returned by the next call to next()
 will be the collation element corresponding to the specified position
 in the text.  If that position is in the middle of a contracting
 character sequence, the result of the next call to next() is the
 collation element for that sequence.  This means that getOffset()
 is not guaranteed to return the same value as was passed to a preceding
 call to setOffset().

**参数**

- **newOffset** — The new character offset into the original text.

> *Since 1.2*
