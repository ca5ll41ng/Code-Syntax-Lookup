---
id: "java-en-function-httpclient-sslparameters"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.sslParameters"
signature: "public abstract SSLParameters sslParameters()"
title: "HttpClient.sslParameters"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.sslParameters

```java
public abstract SSLParameters sslParameters()
```

Returns a copy of this client's `SSLParameters`.

 

 If no `SSLParameters` were set in the client's builder, then an
 implementation specific default set of parameters, that the client will
 use, is returned.

**返回**

- this client's `SSLParameters`
