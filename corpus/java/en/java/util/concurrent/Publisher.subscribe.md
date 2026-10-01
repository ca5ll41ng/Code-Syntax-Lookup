---
id: "java-en-function-publisher-subscribe"
language: "java"
lang: "en"
category: "function"
name: "Publisher.subscribe"
signature: "public void subscribe(Subscriber<? super T> subscriber)"
title: "Publisher.subscribe"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Publisher.subscribe

```java
public void subscribe(Subscriber<? super T> subscriber)
```

Adds the given Subscriber if possible.  If already
 subscribed, or the attempt to subscribe fails due to policy
 violations or errors, the Subscriber's `onError`
 method is invoked with an `IllegalStateException`.
 Otherwise, the Subscriber's `onSubscribe` method is
 invoked with a new `Subscription`.  Subscribers may
 enable receiving items by invoking the `request`
 method of this Subscription, and may unsubscribe by
 invoking its `cancel` method.

**参数**

- **subscriber** — the subscriber

**异常**

- **NullPointerException** — if subscriber is null
