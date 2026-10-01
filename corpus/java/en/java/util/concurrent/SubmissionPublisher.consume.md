---
id: "java-en-function-submissionpublisher-consume"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.consume"
signature: "public CompletableFuture<Void> consume(Consumer<? super T> consumer)"
title: "SubmissionPublisher.consume"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.consume

```java
public CompletableFuture<Void> consume(Consumer<? super T> consumer)
```

Processes all published items using the given Consumer function.
 Returns a CompletableFuture that is completed normally when this
 publisher signals `onComplete()
 onComplete`, or completed exceptionally upon any error, or an
 exception is thrown by the Consumer, or the returned
 CompletableFuture is cancelled, in which case no further items
 are processed.

**参数**

- **consumer** — the function applied to each onNext item

**返回**

- a CompletableFuture that is completed normally when the publisher signals onComplete, and exceptionally upon any error or cancellation

**异常**

- **NullPointerException** — if consumer is null
