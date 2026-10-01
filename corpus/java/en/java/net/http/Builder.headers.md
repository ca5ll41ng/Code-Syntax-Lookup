---
id: "java-en-function-builder-headers"
language: "java"
lang: "en"
category: "function"
name: "Builder.headers"
signature: "public Builder headers(String... headers)"
title: "Builder.headers"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.headers

```java
public Builder headers(String... headers)
```

Adds the given name value pairs to the set of headers for this
 request. The supplied `String` instances must alternate as
 header names and header values.
 To add several values to the same name then the same name must
 be supplied with each new value.

**参数**

- **headers** — the list of name value pairs

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if there are an odd number of parameters, or if a header name or value is not valid, see  RFC 7230 section-3.2, or a header name or value is `header(String, String) restricted` by the implementation.
