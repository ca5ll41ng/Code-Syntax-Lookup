---
id: "java-en-function-websockethandshakeexception-getresponse"
language: "java"
lang: "en"
category: "function"
name: "WebSocketHandshakeException.getResponse"
signature: "public HttpResponse<?> getResponse()"
title: "WebSocketHandshakeException.getResponse"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/WebSocketHandshakeException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WebSocketHandshakeException.getResponse

```java
public HttpResponse<?> getResponse()
```

Returns the server's counterpart of the opening handshake.

 

 The value may be unavailable (`null`) if this exception has
 been serialized and then deserialized.

 examination of the reasons behind the failure of the opening handshake.
 Some of these reasons might allow recovery.

**返回**

- server response
