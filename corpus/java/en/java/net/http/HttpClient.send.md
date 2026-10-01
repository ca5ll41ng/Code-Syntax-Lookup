---
id: "java-en-function-httpclient-send"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.send"
signature: "public abstract <T> HttpResponse<T> send(HttpRequest request, HttpResponse.BodyHandler<T> responseBodyHandler) throws IOException, InterruptedException"
title: "HttpClient.send"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.send

```java
public abstract <T> HttpResponse<T> send(HttpRequest request, HttpResponse.BodyHandler<T> responseBodyHandler) throws IOException, InterruptedException
```

Sends the given request using this client, blocking if necessary to get
 the response. The returned `HttpResponse``` contains the
 response status, headers, and body ( as handled by given response body
 handler ).

 

 If the operation is interrupted, the default `HttpClient`
 implementation attempts to cancel the HTTP exchange and
 `InterruptedException` is thrown.
 No guarantee is made as to exactly when the cancellation request
 may be taken into account. In particular, the request might still get sent
 to the server, as its processing might already have started asynchronously
 in another thread, and the underlying resources may only be released
 asynchronously.
 
     
- With HTTP/1.1, an attempt to cancel may cause the underlying
         connection to be closed abruptly.
     
- With HTTP/2, an attempt to cancel may cause the stream to be reset,
         or in certain circumstances, may also cause the connection to be
         closed abruptly, if, for instance, the thread is currently trying
         to write to the underlying socket.

**参数**

- **the** — response body type
- **request** — the request
- **responseBodyHandler** — the response body handler

**返回**

- the response

**异常**

- **IOException** — if an I/O error occurs when sending or receiving, or the client has `#closing shut down`
- **InterruptedException** — if the operation is interrupted
- **IllegalArgumentException** — if the `request` argument is not a request that could have been validly built as specified by `HttpRequest.Builder HttpRequest.Builder`.
