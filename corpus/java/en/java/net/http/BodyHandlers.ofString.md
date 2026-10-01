---
id: "java-en-function-bodyhandlers-ofstring"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofString"
signature: "public static BodyHandler<String> ofString(Charset charset)"
title: "BodyHandlers.ofString"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofString

```java
public static BodyHandler<String> ofString(Charset charset)
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber``` obtained from
 `ofString`.
 The body is decoded using the given character set.

**参数**

- **charset** — the character set to convert the body with

**返回**

- a response body handler
