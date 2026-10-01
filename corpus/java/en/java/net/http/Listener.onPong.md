---
id: "java-en-function-listener-onpong"
language: "java"
lang: "en"
category: "function"
name: "Listener.onPong"
signature: "default CompletionStage<?> onPong(WebSocket webSocket, ByteBuffer message)"
title: "Listener.onPong"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onPong

```java
default CompletionStage<?> onPong(WebSocket webSocket, ByteBuffer message)
```

A Pong message has been received.

 

 As guaranteed by the WebSocket Protocol, the message consists of
 not more than `125` bytes. These bytes are located from the
 buffer's position to its limit.

 

 Return a `CompletionStage` which will be used by the
 `WebSocket` as a signal it may reclaim the
 `ByteBuffer`. Do not access the `ByteBuffer` after
 this `CompletionStage` has completed.

 {@snippet :
    webSocket.request(1);
    return null; }

**参数**

- **webSocket** — the WebSocket on which the message has been received
- **message** — the message

**返回**

- a `CompletionStage` which completes when the `ByteBuffer` may be reclaimed; or `null` if it may be reclaimed immediately
