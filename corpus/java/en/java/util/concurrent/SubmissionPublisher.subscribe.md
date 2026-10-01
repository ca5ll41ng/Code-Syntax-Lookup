---
id: "java-en-function-submissionpublisher-subscribe"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.subscribe"
signature: "public void subscribe(Subscriber<? super T> subscriber)"
title: "SubmissionPublisher.subscribe"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.subscribe

```java
public void subscribe(Subscriber<? super T> subscriber)
```

Adds the given Subscriber unless already subscribed.  If already
 subscribed, the Subscriber's `onError(Throwable) onError` method is invoked on
 the existing subscription with an `IllegalStateException`.
 Otherwise, upon success, the Subscriber's `onSubscribe onSubscribe` method is invoked
 asynchronously with a new `Flow.Subscription`.  If `onSubscribe onSubscribe` throws an exception, the
 subscription is cancelled. Otherwise, if this SubmissionPublisher
 was closed exceptionally, then the subscriber's `onError onError` method is invoked with the
 corresponding exception, or if closed without exception, the
 subscriber's `onComplete() onComplete`
 method is invoked.  Subscribers may enable receiving items by
 invoking the `request(long) request`
 method of the new Subscription, and may unsubscribe by invoking
 its `cancel() cancel` method.

**参数**

- **subscriber** — the subscriber

**异常**

- **NullPointerException** — if subscriber is null
