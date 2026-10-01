---
id: "java-en-function-concurrentskiplistset-addfirst"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.addFirst"
signature: "public void addFirst(E e)"
title: "ConcurrentSkipListSet.addFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.addFirst

```java
public void addFirst(E e)
```

Throws `UnsupportedOperationException`. The encounter order induced by this
 set's comparison method determines the position of elements, so explicit positioning
 is not supported.

**异常**

- **UnsupportedOperationException** — always

> *Since 21*
