---
id: "java-en-function-listiterator-previous"
language: "java"
lang: "en"
category: "function"
name: "ListIterator.previous"
signature: "E previous()"
title: "ListIterator.previous"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator.previous

```java
E previous()
```

Returns the previous element in the list and moves the cursor
 position backwards.  This method may be called repeatedly to
 iterate through the list backwards, or intermixed with calls to
 `next` to go back and forth.  (Note that alternating calls
 to `next` and `previous` will return the same
 element repeatedly.)

**返回**

- the previous element in the list

**异常**

- **NoSuchElementException** — if the iteration has no previous element
