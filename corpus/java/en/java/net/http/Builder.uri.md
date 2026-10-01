---
id: "java-en-function-builder-uri"
language: "java"
lang: "en"
category: "function"
name: "Builder.uri"
signature: "public Builder uri(URI uri)"
title: "Builder.uri"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.uri

```java
public Builder uri(URI uri)
```

Sets this `HttpRequest`'s request `URI`.

**参数**

- **uri** — the request URI

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the `URI` scheme is not supported
