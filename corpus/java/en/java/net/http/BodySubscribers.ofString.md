---
id: "java-en-function-bodysubscribers-ofstring"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofString"
signature: "public static BodySubscriber<String> ofString(Charset charset)"
title: "BodySubscribers.ofString"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofString

```java
public static BodySubscriber<String> ofString(Charset charset)
```

Returns a body subscriber which stores the response body as a `String` converted using the given `Charset`.

 

 The `HttpResponse` using this subscriber is available after
 the entire response has been read.

**参数**

- **charset** — the character set to convert the String with

**返回**

- a body subscriber
