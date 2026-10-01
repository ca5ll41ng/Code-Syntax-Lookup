---
id: "java-en-function-httpclient-newwebsocketbuilder"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.newWebSocketBuilder"
signature: "public WebSocket.Builder newWebSocketBuilder()"
title: "HttpClient.newWebSocketBuilder"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.newWebSocketBuilder

```java
public WebSocket.Builder newWebSocketBuilder()
```

Creates a new `WebSocket` builder (optional operation).

 

 **Example**
 {@snippet :
   HttpClient client = HttpClient.newHttpClient();
   CompletableFuture ws = client.newWebSocketBuilder()
      .buildAsync(URI.create("ws://websocket.example.com"), listener);  }

 

 Finer control over the WebSocket Opening Handshake can be achieved
 by using a custom `HttpClient`.

 

 **Example**
 {@snippet :
   InetSocketAddress addr = new InetSocketAddress("proxy.example.com", 80);
   HttpClient client = HttpClient.newBuilder()
           .proxy(ProxySelector.of(addr))
           .build();

   CompletableFuture ws = client.newWebSocketBuilder()
           .buildAsync(URI.create("ws://websocket.example.com"), listener);  }

 `UnsupportedOperationException`. Clients obtained through
 `newHttpClient` or `newBuilder`
 return a `WebSocket` builder.

 a non-blocking fashion. That is, their methods do not block before
 returning a `CompletableFuture`. Asynchronous tasks are executed in
 this `HttpClient`'s executor.

 

 When a `CompletionStage` returned from
 `onClose Listener.onClose` completes,
 the `WebSocket` will send a Close message that has the same code
 the received message has and an empty reason.

**返回**

- a `WebSocket.Builder`

**异常**

- **UnsupportedOperationException** — if this `HttpClient` does not provide WebSocket support
