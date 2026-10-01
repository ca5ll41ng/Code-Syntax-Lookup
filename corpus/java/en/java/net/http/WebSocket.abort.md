---
id: "java-en-function-websocket-abort"
language: "java"
lang: "en"
category: "function"
name: "WebSocket.abort"
signature: "void abort()"
title: "WebSocket.abort"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocket.abort

```java
void abort()
```

Closes this WebSocket's input and output abruptly.

 

 When this method returns both the input and the output will have been
 closed. Any pending send operations will fail with `IOException`.
 Subsequent invocations of `abort` will have no effect.
