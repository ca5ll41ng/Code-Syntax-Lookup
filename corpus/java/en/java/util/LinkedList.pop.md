---
id: "java-en-function-linkedlist-pop"
language: "java"
lang: "en"
category: "function"
name: "LinkedList.pop"
signature: "public E pop()"
title: "LinkedList.pop"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedList.pop

```java
public E pop()
```

Pops an element from the stack represented by this list.  In other
 words, removes and returns the first element of this list.

 

This method is equivalent to `removeFirst`.

**返回**

- the element at the front of this list (which is the top of the stack represented by this list)

**异常**

- **NoSuchElementException** — if this list is empty

> *Since 1.6*
