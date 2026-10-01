---
id: "java-en-function-httpclient-proxy"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.proxy"
signature: "public abstract Optional<ProxySelector> proxy()"
title: "HttpClient.proxy"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.proxy

```java
public abstract Optional<ProxySelector> proxy()
```

Returns an `Optional` containing the `ProxySelector`
 supplied to this client. If no proxy selector was set in this client's
 builder, then the `Optional` is empty.

 

 Even though this method may return an empty optional, the `HttpClient` may still have a non-exposed `proxy(ProxySelector) default proxy selector` that is
 used for sending HTTP requests.

**返回**

- an `Optional` containing the proxy selector supplied to this client.
