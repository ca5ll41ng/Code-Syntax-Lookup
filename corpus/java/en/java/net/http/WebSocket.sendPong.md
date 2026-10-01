---
id: "java-en-function-websocket-sendpong"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.sendPong"
signature: "CompletableFuture<WebSocket> sendPong(ByteBuffer message)"
title: "WebSocket.sendPong"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.sendPong

```java
CompletableFuture<WebSocket> sendPong(ByteBuffer message)
```

Sends a Pong message with bytes from the given buffer.

 

 The message consists of not more than `125` bytes from the
 buffer's position to its limit. Upon normal completion of a
 `CompletableFuture` returned from this method the buffer will have
 no remaining bytes. The buffer must not be accessed until after that.

 

 Given that the WebSocket implementation will automatically send a
 reciprocal pong when a ping is received, it is rarely required to send a
 pong message explicitly.

 

 The `CompletableFuture` returned from this method can
 complete exceptionally with:
 
 
-  `IllegalStateException` -
          if there is a pending ping or pong send operation
 
-  `IllegalArgumentException` -
          if the message is too long
 
-  `IOException` -
          if an I/O error occurs, or if the output is closed

**参数**

- **message** — the message

**返回**

- a `CompletableFuture` that completes, with this WebSocket, when the Pong message has been sent
