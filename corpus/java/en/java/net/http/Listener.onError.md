---
id: "java-en-function-listener-onerror"
language: "java"
lang: "en"
category: "function"
name: "Listener.onError"
signature: "default void onError(WebSocket webSocket, Throwable error)"
title: "Listener.onError"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onError

```java
default void onError(WebSocket webSocket, Throwable error)
```

An error has occurred.

 

 This is the last invocation from the specified WebSocket. By the
 time this invocation begins both the WebSocket's input and output
 will have been closed. A WebSocket may invoke this method on the
 associated listener at any time after it has invoked `onOpen`,
 regardless of whether or not any invocations have been requested from
 the WebSocket.

 

 If an exception is thrown from this method, resulting behavior is
 undefined.

**参数**

- **webSocket** — the WebSocket on which the error has occurred
- **error** — the error
