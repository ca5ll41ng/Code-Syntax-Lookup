---
id: "java-en-function-httpclient-cookiehandler"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.cookieHandler"
signature: "public abstract Optional<CookieHandler> cookieHandler()"
title: "HttpClient.cookieHandler"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.cookieHandler

```java
public abstract Optional<CookieHandler> cookieHandler()
```

Returns an `Optional` containing this client's `CookieHandler`. If no `CookieHandler` was set in this client's
 builder, then the `Optional` is empty.

**返回**

- an `Optional` containing this client's `CookieHandler`
