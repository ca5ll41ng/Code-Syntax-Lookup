---
id: "java-en-function-websocket-isinputclosed"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.isInputClosed"
signature: "boolean isInputClosed()"
title: "WebSocket.isInputClosed"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.isInputClosed

```java
boolean isInputClosed()
```

Tells whether this WebSocket's input is closed.

 

 If this method returns `true`, subsequent invocations will also
 return `true`.

**返回**

- `true` if closed, `false` otherwise
