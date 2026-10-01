---
id: "java-en-function-httpclient-sendasync"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.sendAsync"
signature: "public abstract <T> CompletableFuture<HttpResponse<T>> sendAsync(HttpRequest request, BodyHandler<T> responseBodyHandler)"
title: "HttpClient.sendAsync"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.sendAsync

```java
public abstract <T> CompletableFuture<HttpResponse<T>> sendAsync(HttpRequest request, BodyHandler<T> responseBodyHandler)
```

Sends the given request asynchronously using this client with the given
 response body handler.

 

 Equivalent to: `sendAsync(request, responseBodyHandler, null)`.

**参数**

- **the** — response body type
- **request** — the request
- **responseBodyHandler** — the response body handler

**返回**

- a `CompletableFuture>`

**异常**

- **IllegalArgumentException** — if the `request` argument is not a request that could have been validly built as specified by `HttpRequest.Builder HttpRequest.Builder`.
