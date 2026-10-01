---
id: "java-en-function-httpclient-newhttpclient"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.newHttpClient"
signature: "public static HttpClient newHttpClient()"
title: "HttpClient.newHttpClient"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.newHttpClient

```java
public static HttpClient newHttpClient()
```

Returns a new `HttpClient` with default settings.

 

 Equivalent to `newBuilder().build()`.

 

 The default settings include: the "GET" request method, a preference
 of `HTTP_2 HTTP/2`, a redirection policy of
 `NEVER NEVER`, the `getDefault() default proxy selector`, and the `getDefault() default SSL context`.

 `HttpClient` instance is constructed. Changing the system-wide
 values after an `HttpClient` instance has been built, for
 instance, by calling `setDefault`
 or `setDefault`, has no effect on already
 built instances.

**返回**

- a new HttpClient

**异常**

- **UncheckedIOException** — if necessary underlying IO resources required to `build() build a new HttpClient` cannot be allocated.
