---
id: "java-en-function-httpclient-sslcontext"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.sslContext"
signature: "public abstract SSLContext sslContext()"
title: "HttpClient.sslContext"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.sslContext

```java
public abstract SSLContext sslContext()
```

Returns this client's `SSLContext`.

 

 If no `SSLContext` was set in this client's builder, then the
 `getDefault() default context` is returned.

**返回**

- this client's SSLContext
