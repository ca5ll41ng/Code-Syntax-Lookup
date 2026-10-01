---
id: "java-en-function-bodysubscribers-fromlinesubscriber"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.fromLineSubscriber"
signature: "public static BodySubscriber<Void> fromLineSubscriber(Subscriber<? super String> subscriber)"
title: "BodySubscribers.fromLineSubscriber"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.fromLineSubscriber

```java
public static BodySubscriber<Void> fromLineSubscriber(Subscriber<? super String> subscriber)
```

Returns a body subscriber that forwards all response body to the
 given `Flow.Subscriber`, line by line.
 The `getBody() completion
 stage` of the returned body subscriber completes after one of the
 given subscribers `onComplete` or `onError` has been
 invoked.
 Bytes are decoded using the `UTF_8
 UTF-8` charset, and lines are delimited in the manner of
 `readLine`.

      fromLineSubscriber(subscriber, s -> null, StandardCharsets.UTF_8, null) }

**参数**

- **subscriber** — the subscriber

**返回**

- a body subscriber
