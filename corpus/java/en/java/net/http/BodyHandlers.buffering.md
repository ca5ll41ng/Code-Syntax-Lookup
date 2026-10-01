---
id: "java-en-function-bodyhandlers-buffering"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.buffering"
signature: "public static <T> BodyHandler<T> buffering(BodyHandler<T> downstreamHandler, int bufferSize)"
title: "BodyHandlers.buffering"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.buffering

```java
public static <T> BodyHandler<T> buffering(BodyHandler<T> downstreamHandler, int bufferSize)
```

Returns a `BodyHandler` which, when invoked, returns a `buffering(BodySubscriber,int) buffering BodySubscriber`
 that buffers data before delivering it to the downstream subscriber.
 These `BodySubscriber` instances are created by calling
 `buffering(BodySubscriber,int)
 BodySubscribers.buffering` with a subscriber obtained from the given
 downstream handler and the `bufferSize` parameter.

**参数**

- **the** — response body type
- **downstreamHandler** — the downstream handler
- **bufferSize** — the buffer size parameter passed to `buffering(BodySubscriber,int) BodySubscribers.buffering`

**返回**

- a body handler

**异常**

- **IllegalArgumentException** — if `bufferSize <= 0`
