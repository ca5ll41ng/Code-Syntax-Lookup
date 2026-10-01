---
id: "java-en-function-bodyhandlers-limiting"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.limiting"
signature: "public static <T> BodyHandler<T> limiting(BodyHandler<T> downstreamHandler, long capacity)"
title: "BodyHandlers.limiting"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.limiting

```java
public static <T> BodyHandler<T> limiting(BodyHandler<T> downstreamHandler, long capacity)
```

{@return a `BodyHandler` that limits the number of body bytes
 that are delivered to the given `downstreamHandler`}
 

 If the number of body bytes received exceeds the given
 `capacity`, `onError(Throwable) onError`
 is called on the downstream `BodySubscriber` with an
 `IOException` indicating that the capacity is exceeded, and
 the upstream subscription is cancelled.

**参数**

- **downstreamHandler** — the downstream handler to pass received data to
- **capacity** — the maximum number of bytes that are allowed

**异常**

- **IllegalArgumentException** — if `capacity` is negative

> *Since 25*
