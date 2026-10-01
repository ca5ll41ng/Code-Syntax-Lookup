---
id: "java-en-function-completionservice-take"
language: "java"
lang: "en"
category: "function"
name: "CompletionService.take"
signature: "Future<V> take() throws InterruptedException"
title: "CompletionService.take"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionService.take

```java
Future<V> take() throws InterruptedException
```

Retrieves and removes the Future representing the next
 completed task, waiting if none are yet present.

**返回**

- the Future representing the next completed task

**异常**

- **InterruptedException** — if interrupted while waiting
