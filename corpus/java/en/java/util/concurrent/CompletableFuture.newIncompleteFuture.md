---
id: "java-en-function-completablefuture-newincompletefuture"
language: "java"
lang: "en"
category: "function"
name: "CompletableFuture.newIncompleteFuture"
signature: "public <U> CompletableFuture<U> newIncompleteFuture()"
title: "CompletableFuture.newIncompleteFuture"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletableFuture.newIncompleteFuture

```java
public <U> CompletableFuture<U> newIncompleteFuture()
```

Returns a new incomplete CompletableFuture of the type to be
 returned by a CompletionStage method. Subclasses should
 normally override this method to return an instance of the same
 class as this CompletableFuture. The default implementation
 returns an instance of class CompletableFuture.

**参数**

- **the** — type of the value

**返回**

- a new CompletableFuture

> *Since 9*
