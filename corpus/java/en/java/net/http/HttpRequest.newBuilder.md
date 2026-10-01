---
id: "java-en-function-httprequest-newbuilder"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.newBuilder"
signature: "public static HttpRequest.Builder newBuilder(URI uri)"
title: "HttpRequest.newBuilder"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.newBuilder

```java
public static HttpRequest.Builder newBuilder(URI uri)
```

Creates an `HttpRequest` builder with the given URI.

**参数**

- **uri** — the request URI

**返回**

- a new request builder

**异常**

- **IllegalArgumentException** — if the URI scheme is not supported.
