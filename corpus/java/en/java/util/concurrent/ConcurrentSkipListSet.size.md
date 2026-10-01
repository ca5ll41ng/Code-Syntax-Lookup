---
id: "java-en-function-concurrentskiplistset-size"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.size"
signature: "public int size()"
title: "ConcurrentSkipListSet.size"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.size

```java
public int size()
```

Returns the number of elements in this set.  If this set
 contains more than `Integer.MAX_VALUE` elements, it
 returns `Integer.MAX_VALUE`.

 

It is possible for the size to change during execution of this method,
 in which case the returned result will be inaccurate.
 Thus, this method is typically not very useful in concurrent applications.

**返回**

- the number of elements in this set
