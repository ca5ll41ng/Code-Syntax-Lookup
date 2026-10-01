---
id: "java-en-function-bodysubscribers-oflines"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofLines"
signature: "public static BodySubscriber<Stream<String>> ofLines(Charset charset)"
title: "BodySubscribers.ofLines"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofLines

```java
public static BodySubscriber<Stream<String>> ofLines(Charset charset)
```

Returns a `BodySubscriber` which streams the response body as
 a `Stream Stream```, where each string in the stream
 corresponds to a line as defined by `lines`.

 

 The `HttpResponse` using this subscriber is available
 immediately after the response headers have been read, without
 requiring to wait for the entire body to be processed. The response
 body can then be read directly from the `Stream`.

 corresponding exchange are properly released the caller must
 ensure to either read all lines until the stream is exhausted,
 or call `close` if it is unable or unwilling to do so.
 Calling `close` before exhausting the stream may cause
 the underlying HTTP connection to be closed and prevent it
 from being reused for subsequent operations.

**参数**

- **charset** — the character set to use when converting bytes to characters

**返回**

- a `#streaming streaming body subscriber` which streams the response body as a `Stream Stream```.

**参见**

- BufferedReader#lines()
