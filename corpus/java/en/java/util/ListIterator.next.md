---
id: "java-en-function-listiterator-next"
language: "java"
lang: "en"
category: "function"
name: "ListIterator.next"
signature: "E next()"
title: "ListIterator.next"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ListIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListIterator.next

```java
E next()
```

Returns the next element in the list and advances the cursor position.
 This method may be called repeatedly to iterate through the list,
 or intermixed with calls to `previous` to go back and forth.
 (Note that alternating calls to `next` and `previous`
 will return the same element repeatedly.)

**返回**

- the next element in the list

**异常**

- **NoSuchElementException** — if the iteration has no next element
