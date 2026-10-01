---
id: "java-en-function-synchronousqueue-spliterator"
language: "java"
lang: "en"
category: "function"
name: "SynchronousQueue.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "SynchronousQueue.spliterator"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SynchronousQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronousQueue.spliterator

```java
public Spliterator<E> spliterator()
```

Returns an empty spliterator in which calls to
 `trySplit() trySplit` always return `null`.

**返回**

- an empty spliterator

> *Since 1.8*
