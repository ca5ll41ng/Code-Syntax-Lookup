---
id: "java-en-function-submissionpublisher-submissionpublisher"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.SubmissionPublisher"
signature: "public SubmissionPublisher(Executor executor, int maxBufferCapacity, BiConsumer<? super Subscriber<? super T>, ? super Throwable> handler)"
title: "SubmissionPublisher.SubmissionPublisher"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.SubmissionPublisher

```java
public SubmissionPublisher(Executor executor, int maxBufferCapacity, BiConsumer<? super Subscriber<? super T>, ? super Throwable> handler)
```

Creates a new SubmissionPublisher using the given Executor for
 async delivery to subscribers, with the given maximum buffer size
 for each subscriber, and, if non-null, the given handler invoked
 when any Subscriber throws an exception in method `onNext(Object) onNext`.

**参数**

- **executor** — the executor to use for async delivery, supporting creation of at least one independent thread
- **maxBufferCapacity** — the maximum capacity for each subscriber's buffer (the enforced capacity may be rounded up to the nearest power of two and/or bounded by the largest value supported by this implementation; method `getMaxBufferCapacity` returns the actual value)
- **handler** — if non-null, procedure to invoke upon exception thrown in method `onNext`

**异常**

- **NullPointerException** — if executor is null
- **IllegalArgumentException** — if maxBufferCapacity not positive
