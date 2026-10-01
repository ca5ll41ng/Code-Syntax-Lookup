---
id: "java-en-function-blockingdeque-takefirst"
language: "java"
lang: "en"
category: "function"
name: "BlockingDeque.takeFirst"
signature: "E takeFirst() throws InterruptedException"
title: "BlockingDeque.takeFirst"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingDeque.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BlockingDeque.takeFirst

```java
E takeFirst() throws InterruptedException
```

Retrieves and removes the first element of this deque, waiting
 if necessary until an element becomes available.

**返回**

- the head of this deque

**异常**

- **InterruptedException** — if interrupted while waiting
