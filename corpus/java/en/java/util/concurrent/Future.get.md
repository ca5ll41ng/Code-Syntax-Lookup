---
id: "java-en-function-future-get"
language: "java"
lang: "en"
category: "function"
name: "Future.get"
signature: "V get() throws InterruptedException, ExecutionException"
title: "Future.get"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.get

```java
V get() throws InterruptedException, ExecutionException
```

Waits if necessary for the computation to complete, and then
 retrieves its result.

**返回**

- the computed result

**异常**

- **CancellationException** — if the computation was cancelled
- **ExecutionException** — if the computation threw an exception
- **InterruptedException** — if the current thread was interrupted while waiting
