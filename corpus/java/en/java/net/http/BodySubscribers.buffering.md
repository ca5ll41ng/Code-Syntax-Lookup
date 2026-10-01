---
id: "java-en-function-bodysubscribers-buffering"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.buffering"
signature: "public static <T> BodySubscriber<T> buffering(BodySubscriber<T> downstream, int bufferSize)"
title: "BodySubscribers.buffering"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.buffering

```java
public static <T> BodySubscriber<T> buffering(BodySubscriber<T> downstream, int bufferSize)
```

Returns a `BodySubscriber` which buffers data before delivering
 it to the given downstream subscriber. The subscriber guarantees to
 deliver `bufferSize` bytes of data to each invocation of the
 downstream's `onNext(Object) onNext` method,
 except for the final invocation, just before
 `onComplete() onComplete` is invoked. The final
 invocation of `onNext` may contain fewer than `bufferSize`
 bytes.

 

 The returned subscriber delegates its `getBody()
 getBody` method to the downstream subscriber.

**参数**

- **the** — type of the response body
- **downstream** — the downstream subscriber
- **bufferSize** — the buffer size

**返回**

- a buffering body subscriber

**异常**

- **IllegalArgumentException** — if `bufferSize <= 0`
