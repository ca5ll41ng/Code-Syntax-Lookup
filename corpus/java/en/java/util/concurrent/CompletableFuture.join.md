---
id: "java-en-function-completablefuture-join"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.join"
signature: "public T join()"
title: "CompletableFuture.join"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.join

```java
public T join()
```

Returns the result value when complete, or throws an
 (unchecked) exception if completed exceptionally. To better
 conform with the use of common functional forms, if a
 computation involved in the completion of this
 CompletableFuture threw an exception, this method throws an
 (unchecked) `CompletionException` with the underlying
 exception as its cause.

**返回**

- the result value

**异常**

- **CancellationException** — if the computation was cancelled
- **CompletionException** — if this future completed exceptionally or a completion computation threw an exception
