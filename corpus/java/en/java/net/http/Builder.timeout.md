---
id: "java-en-function-builder-timeout"
language: "java"
lang: "en"
category: "function"
name: "Builder.timeout"
signature: "public abstract Builder timeout(Duration duration)"
title: "Builder.timeout"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.timeout

```java
public abstract Builder timeout(Duration duration)
```

Sets a timeout for this request. If the response is not received
 within the specified timeout then an `HttpTimeoutException` is
 thrown from `send(java.net.http.HttpRequest,
 java.net.http.HttpResponse.BodyHandler) HttpClient::send` or
 `sendAsync(java.net.http.HttpRequest,
 java.net.http.HttpResponse.BodyHandler) HttpClient::sendAsync`
 completes exceptionally with an `HttpTimeoutException`. The effect
 of not setting a timeout is the same as setting an infinite
 `Duration`, i.e., block forever.

 A timeout applies to the duration measured from the instant the
 request execution starts to, at least, the instant an
 `HttpResponse` is constructed. The elapsed time includes
 obtaining a connection for transport and retrieving the response
 headers.

 The JDK built-in implementation applies timeout over the duration
 measured from the instant the request execution starts to **the
 instant the response body is consumed**, if present. This is
 implemented by stopping the timer after the response body subscriber
 completion.

**参数**

- **duration** — the timeout duration

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the duration is non-positive

**参见**

- HttpClient.Builder#connectTimeout(Duration) Configuring timeout for connection establishment
