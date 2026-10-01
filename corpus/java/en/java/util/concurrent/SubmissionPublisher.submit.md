---
id: "java-en-function-submissionpublisher-submit"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.submit"
signature: "public int submit(T item)"
title: "SubmissionPublisher.submit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.submit

```java
public int submit(T item)
```

Publishes the given item to each current subscriber by
 asynchronously invoking its `onNext(Object)
 onNext` method, blocking uninterruptibly while resources for any
 subscriber are unavailable. This method returns an estimate of
 the maximum lag (number of items submitted but not yet consumed)
 among all current subscribers. This value is at least one
 (accounting for this submitted item) if there are any
 subscribers, else zero.

 

If the Executor for this publisher throws a
 RejectedExecutionException (or any other RuntimeException or
 Error) when attempting to asynchronously notify subscribers,
 then this exception is rethrown, in which case not all
 subscribers will have been issued this item.

**参数**

- **item** — the (non-null) item to publish

**返回**

- the estimated maximum lag among subscribers

**异常**

- **IllegalStateException** — if closed
- **NullPointerException** — if item is null
- **RejectedExecutionException** — if thrown by Executor
