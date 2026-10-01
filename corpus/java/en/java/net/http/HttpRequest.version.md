---
id: "java-en-function-httprequest-version"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.version"
signature: "public abstract Optional<HttpClient.Version> version()"
title: "HttpRequest.version"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.version

```java
public abstract Optional<HttpClient.Version> version()
```

Returns an `Optional` containing the HTTP protocol version that
 will be requested for this `HttpRequest`. If the version was not
 set in the request's builder, then the `Optional` is empty.
 In that case, the version requested will be that of the sending
 `HttpClient`. The corresponding `HttpResponse` should be
 queried to determine the version that was actually used.

**返回**

- HTTP protocol version
