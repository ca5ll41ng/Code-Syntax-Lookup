---
id: "java-en-function-joiner-onfork"
language: "java"
lang: "en"
category: "function"
name: "Joiner.onFork"
signature: "default boolean onFork(Subtask<T> subtask)"
title: "Joiner.onFork"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Joiner.onFork

```java
default boolean onFork(Subtask<T> subtask)
```

Invoked by `fork` and `fork(Runnable)
 fork` when forking a subtask. The method is invoked before a thread
 is created to execute the subtask.

 subtask is `null`. It throws `IllegalArgumentException` if the
 subtask is not in the `UNAVAILABLE UNAVAILABLE` state, it
 otherwise returns `false`.

 invoked directly.

**参数**

- **subtask** — the subtask

**返回**

- `true` to cancel the scope, otherwise `false`
