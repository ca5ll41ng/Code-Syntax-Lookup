---
id: "java-en-function-blockingdeque-takelast"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.takeLast"
signature: "E takeLast() throws InterruptedException"
title: "BlockingDeque.takeLast"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.takeLast

```java
E takeLast() throws InterruptedException
```

Retrieves and removes the last element of this deque, waiting
 if necessary until an element becomes available.

**返回**

- the tail of this deque

**异常**

- **InterruptedException** — if interrupted while waiting
