---
id: "java-en-function-builder-header"
language: "java"
lang: "en"
category: "function"
name: "Builder.header"
signature: "public Builder header(String name, String value)"
title: "Builder.header"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.header

```java
public Builder header(String name, String value)
```

Adds the given name value pair to the set of headers for this request.
 The given value is added to the list of values for that name.

           or values, as the HTTP Client may determine their value itself.
           For example, "Content-Length", which will be determined by
           the request Publisher. In such a case, an implementation of
           `HttpRequest.Builder` may choose to throw an
           `IllegalArgumentException` if such a header is passed
           to the builder.

**参数**

- **name** — the header name
- **value** — the header value

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the header name or value is not valid, see RFC 7230 section-3.2, or the header name or value is restricted by the implementation.
