---
id: "java-en-function-httpresponse-previousresponse"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.previousResponse"
signature: "public Optional<HttpResponse<T>> previousResponse()"
title: "HttpResponse.previousResponse"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.previousResponse

```java
public Optional<HttpResponse<T>> previousResponse()
```

Returns an `Optional` containing the previous intermediate response
 if one was received. An intermediate response is one that is received
 as a result of redirection or authentication. If no previous response
 was received then an empty `Optional` is returned.

**返回**

- an Optional containing the HttpResponse, if any.
