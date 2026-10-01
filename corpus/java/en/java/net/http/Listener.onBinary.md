---
id: "java-en-function-listener-onbinary"
language: "java"
lang: "en"
category: "function"
name: "Listener.onBinary"
signature: "default CompletionStage<?> onBinary(WebSocket webSocket, ByteBuffer data, boolean last)"
title: "Listener.onBinary"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onBinary

```java
default CompletionStage<?> onBinary(WebSocket webSocket, ByteBuffer data, boolean last)
```

A binary data has been received.

 

 This data is located in bytes from the buffer's position to its
 limit.

 

 Return a `CompletionStage` which will be used by the
 `WebSocket` as an indication it may reclaim the
 `ByteBuffer`. Do not access the `ByteBuffer` after
 this `CompletionStage` has completed.

 {@snippet :
    webSocket.request(1);
    return null; }

**参数**

- **webSocket** — the WebSocket on which the data has been received
- **data** — the data
- **last** — whether this invocation completes the message

**返回**

- a `CompletionStage` which completes when the `ByteBuffer` may be reclaimed; or `null` if it may be reclaimed immediately
