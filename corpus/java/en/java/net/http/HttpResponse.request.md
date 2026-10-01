---
id: "java-en-function-httpresponse-request"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.request"
signature: "public HttpRequest request()"
title: "HttpResponse.request"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.request

```java
public HttpRequest request()
```

Returns the `HttpRequest` corresponding to this response.

 

 The returned `HttpRequest` may not be the initiating request
 provided when `send(HttpRequest, BodyHandler)
 sending`. For example, if the initiating request was redirected, then the
 request returned by this method will have the redirected URI, which will
 be different from the initiating request URI.

**返回**

- the request

**参见**

- #previousResponse()
