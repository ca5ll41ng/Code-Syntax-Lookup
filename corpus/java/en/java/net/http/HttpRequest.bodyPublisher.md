---
id: "java-en-function-httprequest-bodypublisher"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.bodyPublisher"
signature: "public abstract Optional<BodyPublisher> bodyPublisher()"
title: "HttpRequest.bodyPublisher"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.bodyPublisher

```java
public abstract Optional<BodyPublisher> bodyPublisher()
```

Returns an `Optional` containing the `BodyPublisher` set on
 this request. If no `BodyPublisher` was set in the requests's
 builder, then the `Optional` is empty.

**返回**

- an `Optional` containing this request's `BodyPublisher`
