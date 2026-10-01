---
id: "java-en-function-websocket-sendtext"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.sendText"
signature: "CompletableFuture<WebSocket> sendText(CharSequence data, boolean last)"
title: "WebSocket.sendText"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.sendText

```java
CompletableFuture<WebSocket> sendText(CharSequence data, boolean last)
```

Sends textual data with characters from the given character sequence.

 

 The character sequence must not be modified until the
 `CompletableFuture` returned from this method has completed.

 

 A `CompletableFuture` returned from this method can
 complete exceptionally with:
 
 
-  `IllegalStateException` -
          if there is a pending text or binary send operation
          or if the previous binary data does not complete the message
 
-  `IOException` -
          if an I/O error occurs, or if the output is closed
 

 will fail with `IOException`.

**参数**

- **data** — the data
- **last** — `true` if this invocation completes the message, `false` otherwise

**返回**

- a `CompletableFuture` that completes, with this WebSocket, when the data has been sent
