---
id: "java-en-function-bodysubscribers-ofinputstream"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofInputStream"
signature: "public static BodySubscriber<InputStream> ofInputStream()"
title: "BodySubscribers.ofInputStream"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofInputStream

```java
public static BodySubscriber<InputStream> ofInputStream()
```

Returns a `BodySubscriber` which streams the response body as
 an `InputStream`.

 

 The `HttpResponse` using this subscriber is available
 immediately after the response headers have been read, without
 requiring to wait for the entire body to be processed. The response
 body can then be read directly from the `InputStream`.

 corresponding exchange are properly released the caller must
 ensure to either read all bytes until EOF is reached, or call
 `close` if it is unable or unwilling to do so.
 Calling `close` before exhausting the stream may cause
 the underlying HTTP connection to be closed and prevent it
 from being reused for subsequent operations.

 returned by the default implementation of this method will
 throw an `IOException` with the `isInterrupted()
 thread interrupted status set` if the thread is interrupted
 while blocking on read. In that case, the request will also be
 cancelled and the `InputStream` will be closed.

**返回**

- a `#streaming streaming body subscriber` which streams the response body as an `InputStream`.
