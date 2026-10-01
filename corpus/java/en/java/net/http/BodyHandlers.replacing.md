---
id: "java-en-function-bodyhandlers-replacing"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.replacing"
signature: "public static <U> BodyHandler<U> replacing(U value)"
title: "BodyHandlers.replacing"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.replacing

```java
public static <U> BodyHandler<U> replacing(U value)
```

Returns a response body handler that returns the given replacement
 value, after discarding the response body.

**参数**

- **the** — response body type
- **value** — the value of U to return as the body, may be `null`

**返回**

- a response body handler
