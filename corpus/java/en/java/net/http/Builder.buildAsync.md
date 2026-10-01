---
id: "java-en-function-builder-buildasync"
language: "java"
lang: "en"
category: "function"
name: "Builder.buildAsync"
signature: "CompletableFuture<WebSocket> buildAsync(URI uri, Listener listener)"
title: "Builder.buildAsync"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.buildAsync

```java
CompletableFuture<WebSocket> buildAsync(URI uri, Listener listener)
```

Builds a `WebSocket` connected to the given `URI` and
 associated with the given `Listener`.

 

 Returns a `CompletableFuture` which will either complete
 normally with the resulting `WebSocket` or complete
 exceptionally with one of the following errors:
 
 
-  `IOException` -
          if an I/O error occurs
 
-  `WebSocketHandshakeException` -
          if the opening handshake fails
 
-  `HttpTimeoutException` -
          if the opening handshake does not complete within
          the timeout
 
-  `InterruptedException` -
          if the operation is interrupted
 
-  `IllegalArgumentException` -
          if any of the arguments of this builder's methods are
          illegal

**参数**

- **uri** — the WebSocket URI
- **listener** — the listener

**返回**

- a `CompletableFuture` with the `WebSocket`
