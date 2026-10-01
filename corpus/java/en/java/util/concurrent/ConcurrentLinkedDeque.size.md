---
id: "java-en-function-concurrentlinkeddeque-size"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentLinkedDeque.size"
signature: "public int size()"
title: "ConcurrentLinkedDeque.size"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentLinkedDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentLinkedDeque.size

```java
public int size()
```

Returns the number of elements in this deque.  If this deque
 contains more than `Integer.MAX_VALUE` elements, it
 returns `Integer.MAX_VALUE`.

 

Beware that, unlike in most collections, this method is
 NOT a constant-time operation. Because of the
 asynchronous nature of these deques, determining the current
 number of elements requires traversing them all to count them.
 Additionally, it is possible for the size to change during
 execution of this method, in which case the returned result
 will be inaccurate. Thus, this method is typically not very
 useful in concurrent applications.

**返回**

- the number of elements in this deque
