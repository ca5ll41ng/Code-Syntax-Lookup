---
id: "java-en-function-collationelementiterator-next"
language: "java"
lang: "en"
category: "function"
name: "CollationElementIterator.next"
signature: "public int next()"
title: "CollationElementIterator.next"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationElementIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationElementIterator.next

```java
public int next()
```

Get the next collation element in the string.  

This iterator iterates
 over a sequence of collation elements that were built from the string.
 Because there isn't necessarily a one-to-one mapping from characters to
 collation elements, this doesn't mean the same thing as "return the
 collation element [or ordering priority] of the next character in the
 string".
 

This function returns the collation element that the iterator is currently
 pointing to and then updates the internal pointer to point to the next element.
 previous() updates the pointer first and then returns the element.  This
 means that when you change direction while iterating (i.e., call next() and
 then call previous(), or call previous() and then call next()), you'll get
 back the same element twice.

**返回**

- the next collation element
