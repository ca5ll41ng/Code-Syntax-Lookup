---
id: "java-en-function-completablefuture-getnumberofdependents"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.getNumberOfDependents"
signature: "public int getNumberOfDependents()"
title: "CompletableFuture.getNumberOfDependents"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.getNumberOfDependents

```java
public int getNumberOfDependents()
```

Returns the estimated number of CompletableFutures whose
 completions are awaiting completion of this CompletableFuture.
 This method is designed for use in monitoring system state, not
 for synchronization control.

**返回**

- the number of dependent CompletableFutures
