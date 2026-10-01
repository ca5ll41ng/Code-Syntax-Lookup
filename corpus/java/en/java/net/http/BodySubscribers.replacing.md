---
id: "java-en-function-bodysubscribers-replacing"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.replacing"
signature: "public static <U> BodySubscriber<U> replacing(U value)"
title: "BodySubscribers.replacing"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.replacing

```java
public static <U> BodySubscriber<U> replacing(U value)
```

Returns a response subscriber which discards the response body. The
 supplied value is the value that will be returned from
 `body`.

**参数**

- **the** — type of the response body
- **value** — the value to return from HttpResponse.body(), may be `null`

**返回**

- a body subscriber
