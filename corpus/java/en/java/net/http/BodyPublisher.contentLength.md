---
id: "java-en-function-bodypublisher-contentlength"
language: "java"
lang: "en"
category: "function"
name: "BodyPublisher.contentLength"
signature: "long contentLength()"
title: "BodyPublisher.contentLength"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublisher.contentLength

```java
long contentLength()
```

Returns the content length for this request body. May be zero
 if no request body being sent, greater than zero for a fixed
 length content, or less than zero for an unknown content length.

 

 This method may be invoked before the publisher is subscribed to.
 This method may be invoked more than once by the HTTP client
 implementation, and MUST return the same constant value each time.

**返回**

- the content length for this request body, if known
