---
id: "java-en-function-websocket-sendbinary"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.sendBinary"
signature: "CompletableFuture<WebSocket> sendBinary(ByteBuffer data, boolean last)"
title: "WebSocket.sendBinary"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.sendBinary

```java
CompletableFuture<WebSocket> sendBinary(ByteBuffer data, boolean last)
```

Sends binary data with bytes from the given buffer.

 

 The data is located in bytes from the buffer's position to its limit.
 Upon normal completion of a `CompletableFuture` returned from this
 method the buffer will have no remaining bytes. The buffer must not be
 accessed until after that.

 

 The `CompletableFuture` returned from this method can
 complete exceptionally with:
 
 
-  `IllegalStateException` -
          if there is a pending text or binary send operation
          or if the previous textual data does not complete the message
 
-  `IOException` -
          if an I/O error occurs, or if the output is closed

**参数**

- **data** — the data
- **last** — `true` if this invocation completes the message, `false` otherwise

**返回**

- a `CompletableFuture` that completes, with this WebSocket, when the data has been sent
