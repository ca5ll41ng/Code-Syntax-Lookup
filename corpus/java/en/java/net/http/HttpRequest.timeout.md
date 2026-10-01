---
id: "java-en-function-httprequest-timeout"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.timeout"
signature: "public abstract Optional<Duration> timeout()"
title: "HttpRequest.timeout"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.timeout

```java
public abstract Optional<Duration> timeout()
```

Returns an `Optional` containing this request's timeout duration.
 If the timeout duration was not set in the request's builder, then the
 `Optional` is empty.

**返回**

- an `Optional` containing this request's timeout duration
