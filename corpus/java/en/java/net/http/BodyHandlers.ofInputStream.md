---
id: "java-en-function-bodyhandlers-ofinputstream"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofInputStream"
signature: "public static BodyHandler<InputStream> ofInputStream()"
title: "BodyHandlers.ofInputStream"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofInputStream

```java
public static BodyHandler<InputStream> ofInputStream()
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber``` obtained from
 `ofInputStream() BodySubscribers.ofInputStream`.

 

 When the `HttpResponse` object is returned, the response
 headers will have been completely read, but the body may not have
 been fully received yet. The `body` method returns an
 `InputStream` from which the body can be read as it is received.

 information.
 

 To ensure that all resources associated with the
 corresponding exchange are properly released the caller must
 eventually obtain and close the `ofInputStream()
 returned stream`.

**返回**

- a `#streaming streaming` response body handler
