---
id: "java-en-function-listener-onopen"
language: "java"
lang: "en"
category: "function"
name: "Listener.onOpen"
signature: "default void onOpen(WebSocket webSocket)"
title: "Listener.onOpen"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Listener.onOpen

```java
default void onOpen(WebSocket webSocket)
```

A `WebSocket` has been connected.

 

 This is the initial invocation and it is made once. It is
 typically used to make a request for more invocations.

 {@snippet :
  webSocket.request(1); }

**参数**

- **webSocket** — the WebSocket that has been connected
