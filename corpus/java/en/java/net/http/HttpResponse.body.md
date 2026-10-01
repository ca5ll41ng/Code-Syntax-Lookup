---
id: "java-en-function-httpresponse-body"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.body"
signature: "public T body()"
title: "HttpResponse.body"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.body

```java
public T body()
```

Returns the body. Depending on the type of `T`, the returned body
 may represent the body after it was read (such as `byte[]`, or
 `String`, or `Path`) or it may represent an object with
 which the body is read, such as an `java.io.InputStream`.

 

 Depending on the response's `statusCode() status code` or
 the `BodyHandler` used for the request, a body may not always be
 available. It is therefore recommended that the caller always check for
 `null` while dereferencing the result.

 

 If this `HttpResponse` was returned from an invocation of
 `previousResponse` then this method always returns `null`

**返回**

- the body, or `null` if the body is not available
