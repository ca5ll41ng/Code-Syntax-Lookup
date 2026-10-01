---
id: "java-en-function-structuredtaskscope-iscancelled"
language: "java"
lang: "en"
category: "function"
name: "StructuredTaskScope.isCancelled"
signature: "boolean isCancelled()"
title: "StructuredTaskScope.isCancelled"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StructuredTaskScope.isCancelled

```java
boolean isCancelled()
```

{@return `true` if this scope is `#Cancellation cancelled` or in
 the process of being cancelled, otherwise `false`}

 

 Cancelling the scope prevents new threads from starting in the scope and
 `interrupt() interrupts` threads executing unfinished subtasks.
 It may take some time before the interrupted threads finish execution; this
 method may return `true` before all threads have been interrupted or before
 all threads have finished.

 that forks subtasks before the `join` method is invoked) may use this
 method to avoid doing work in cases where the scope is cancelled by the completion
 of a previously forked subtask or a timeout.

> *Since 25*
