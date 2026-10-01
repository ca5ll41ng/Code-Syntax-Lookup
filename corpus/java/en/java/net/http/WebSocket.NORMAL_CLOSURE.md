---
id: "java-en-function-websocket-normal_closure"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.NORMAL_CLOSURE"
signature: "int NORMAL_CLOSURE = 1000"
title: "WebSocket.NORMAL_CLOSURE"
directive: "field"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.NORMAL_CLOSURE

```java
int NORMAL_CLOSURE = 1000
```

The WebSocket Close message status code (``),
 indicating normal closure, meaning that the purpose for which the
 connection was established has been fulfilled.

**参见**

- #sendClose(int, String)
- Listener#onClose(WebSocket, int, String)
