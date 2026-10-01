---
id: "java-en-function-completablefuture-tostring"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.toString"
signature: "public String toString()"
title: "CompletableFuture.toString"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.toString

```java
public String toString()
```

Returns a string identifying this CompletableFuture, as well as
 its completion state.  The state, in brackets, contains the
 String `"Completed normally"` or the String `"Completed exceptionally"`, or the String `"Not
 completed"` followed by the number of CompletableFutures
 dependent upon its completion, if any.

**返回**

- a string identifying this CompletableFuture, as well as its state
