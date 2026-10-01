---
id: "java-en-function-builder-setheader"
language: "java"
lang: "en"
category: "function"
name: "Builder.setHeader"
signature: "public Builder setHeader(String name, String value)"
title: "Builder.setHeader"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setHeader

```java
public Builder setHeader(String name, String value)
```

Sets the given name value pair to the set of headers for this
 request. This overwrites any previously set values for name.

**参数**

- **name** — the header name
- **value** — the header value

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the header name or value is not valid, see RFC 7230 section-3.2, or the header name or value is `header(String, String) restricted` by the implementation.
