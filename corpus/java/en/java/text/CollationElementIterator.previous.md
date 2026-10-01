---
id: "java-en-function-collationelementiterator-previous"
language: "java"
lang: "en"
category: "function"
name: "CollationElementIterator.previous"
signature: "public int previous()"
title: "CollationElementIterator.previous"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationElementIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationElementIterator.previous

```java
public int previous()
```

Get the previous collation element in the string.  

This iterator iterates
 over a sequence of collation elements that were built from the string.
 Because there isn't necessarily a one-to-one mapping from characters to
 collation elements, this doesn't mean the same thing as "return the
 collation element [or ordering priority] of the previous character in the
 string".
 

This function updates the iterator's internal pointer to point to the
 collation element preceding the one it's currently pointing to and then
 returns that element, while next() returns the current element and then
 updates the pointer.  This means that when you change direction while
 iterating (i.e., call next() and then call previous(), or call previous()
 and then call next()), you'll get back the same element twice.

**返回**

- the previous collation element

> *Since 1.2*
