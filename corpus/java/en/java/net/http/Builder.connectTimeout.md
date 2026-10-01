---
id: "java-en-function-builder-connecttimeout"
language: "java"
lang: "en"
category: "function"
name: "Builder.connectTimeout"
signature: "public Builder connectTimeout(Duration duration)"
title: "Builder.connectTimeout"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.connectTimeout

```java
public Builder connectTimeout(Duration duration)
```

Sets the connect timeout duration for this client.

 

 In the case where a new connection needs to be established, if
 the connection cannot be established within the given `duration`, then `send(HttpRequest,BodyHandler)
 HttpClient::send` throws an `HttpConnectTimeoutException`, or
 `sendAsync(HttpRequest,BodyHandler)
 HttpClient::sendAsync` completes exceptionally with an
 `HttpConnectTimeoutException`. If a new connection does not
 need to be established, for example if a connection can be reused
 from a previous request, then this timeout duration has no effect.

 A connection timeout applies to the entire connection phase, from the
 moment a connection is requested until it is established.
 Implementations are recommended to ensure that the connection timeout
 covers any SSL/TLS handshakes.

 The built-in JDK implementation of the connection timeout covers any
 SSL/TLS handshakes.

**参数**

- **duration** — the duration to allow the underlying connection to be established

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the duration is non-positive

**参见**

- HttpRequest.Builder#timeout(Duration) Configuring timeout for request execution
