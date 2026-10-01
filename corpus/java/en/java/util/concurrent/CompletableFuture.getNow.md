---
id: "java-en-function-completablefuture-getnow"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.getNow"
signature: "public T getNow(T valueIfAbsent)"
title: "CompletableFuture.getNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.getNow

```java
public T getNow(T valueIfAbsent)
```

Returns the result value (or throws any encountered exception)
 if completed, else returns the given valueIfAbsent.

**参数**

- **valueIfAbsent** — the value to return if not completed

**返回**

- the result value, if completed, else the given valueIfAbsent

**异常**

- **CancellationException** — if the computation was cancelled
- **CompletionException** — if this future completed exceptionally or a completion computation threw an exception
