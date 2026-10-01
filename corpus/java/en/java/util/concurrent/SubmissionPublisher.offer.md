---
id: "java-en-function-submissionpublisher-offer"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.offer"
signature: "public int offer(T item, BiPredicate<Subscriber<? super T>, ? super T> onDrop)"
title: "SubmissionPublisher.offer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.offer

```java
public int offer(T item, BiPredicate<Subscriber<? super T>, ? super T> onDrop)
```

Publishes the given item, if possible, to each current subscriber
 by asynchronously invoking its `onNext(Object) onNext` method. The item may be
 dropped by one or more subscribers if resource limits are
 exceeded, in which case the given handler (if non-null) is
 invoked, and if it returns true, retried once.  Other calls to
 methods in this class by other threads are blocked while the
 handler is invoked.  Unless recovery is assured, options are
 usually limited to logging the error and/or issuing an `onError(Throwable) onError` signal to the
 subscriber.

 

This method returns a status indicator: If negative, it
 represents the (negative) number of drops (failed attempts to
 issue the item to a subscriber). Otherwise it is an estimate of
 the maximum lag (number of items submitted but not yet
 consumed) among all current subscribers. This value is at least
 one (accounting for this submitted item) if there are any
 subscribers, else zero.

 

If the Executor for this publisher throws a
 RejectedExecutionException (or any other RuntimeException or
 Error) when attempting to asynchronously notify subscribers, or
 the drop handler throws an exception when processing a dropped
 item, then this exception is rethrown.

**参数**

- **item** — the (non-null) item to publish
- **onDrop** — if non-null, the handler invoked upon a drop to a subscriber, with arguments of the subscriber and item; if it returns true, an offer is re-attempted (once)

**返回**

- if negative, the (negative) number of drops; otherwise an estimate of maximum lag

**异常**

- **IllegalStateException** — if closed
- **NullPointerException** — if item is null
- **RejectedExecutionException** — if thrown by Executor
