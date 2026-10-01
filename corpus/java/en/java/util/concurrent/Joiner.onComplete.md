---
id: "java-en-function-joiner-oncomplete"
language: "java"
lang: "en"
category: "function"
name: "Joiner.onComplete"
signature: "default boolean onComplete(Subtask<T> subtask)"
title: "Joiner.onComplete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.onComplete

```java
default boolean onComplete(Subtask<T> subtask)
```

Invoked by the thread that executed a subtask after the subtask completes
 successfully or fails with an exception. This method is not invoked by subtasks
 that complete after the scope is `#Cancellation
 cancelled`.

 subtask is `null`. It throws `IllegalArgumentException` if the
 subtask is not in the `SUCCESS SUCCESS` or `FAILED FAILED` state, it otherwise returns `false`.

 be invoked directly.

**参数**

- **subtask** — the subtask

**返回**

- `true` to cancel the scope, otherwise `false`
