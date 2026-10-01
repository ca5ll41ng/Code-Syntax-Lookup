---
id: "java-en-function-httpresponse-sslsession"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.sslSession"
signature: "public Optional<SSLSession> sslSession()"
title: "HttpResponse.sslSession"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.sslSession

```java
public Optional<SSLSession> sslSession()
```

Returns an `Optional` containing the `SSLSession` in effect
 for this response. Returns an empty `Optional` if this is not a
 HTTPS response.

**返回**

- an `Optional` containing the `SSLSession` associated with the response
