---
id: "java-en-function-builder-method"
language: "java"
lang: "en"
category: "function"
name: "Builder.method"
signature: "public Builder method(String method, BodyPublisher bodyPublisher)"
title: "Builder.method"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.method

```java
public Builder method(String method, BodyPublisher bodyPublisher)
```

Sets the request method and request body of this builder to the
 given values.

 body publisher can be used where no request body is required or
 appropriate. Whether a method is restricted, or not, is
 implementation specific. For example, some implementations may choose
 to restrict the `CONNECT` method.

**参数**

- **method** — the method to use
- **bodyPublisher** — the body publisher

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the method name is not valid, see RFC 7230 section-3.1.1, or the method is restricted by the implementation.
