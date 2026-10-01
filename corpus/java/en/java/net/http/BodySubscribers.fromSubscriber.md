---
id: "java-en-function-bodysubscribers-fromsubscriber"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.fromSubscriber"
signature: "public static BodySubscriber<Void> fromSubscriber(Subscriber<? super List<ByteBuffer>> subscriber)"
title: "BodySubscribers.fromSubscriber"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.fromSubscriber

```java
public static BodySubscriber<Void> fromSubscriber(Subscriber<? super List<ByteBuffer>> subscriber)
```

Returns a body subscriber that forwards all response body to the
 given `Flow.Subscriber`. The `getBody()
 completion stage` of the returned body subscriber completes after one
 of the given subscribers `onComplete` or `onError` has
 been invoked.

**参数**

- **subscriber** — the subscriber

**返回**

- a body subscriber
