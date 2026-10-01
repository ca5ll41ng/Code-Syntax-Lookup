---
id: "java-en-function-bodyhandlers-oflines"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofLines"
signature: "public static BodyHandler<Stream<String>> ofLines()"
title: "BodyHandlers.ofLines"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofLines

```java
public static BodyHandler<Stream<String>> ofLines()
```

Returns a `BodyHandler>` that returns a
 `BodySubscriber BodySubscriber``>` obtained
 from `ofLines`.
 The `Charset charset` used to decode the response body bytes is
 obtained from the HTTP response headers as specified by `ofString`,
 and lines are delimited in the manner of `readLine`.

 

 When the `HttpResponse` object is returned, the body may
 not have been completely received.

 To ensure that all resources associated with the
 corresponding exchange are properly released the caller must
 eventually obtain and close the `ofLines(Charset)
 returned stream`.

**返回**

- a `#streaming streaming` response body handler
