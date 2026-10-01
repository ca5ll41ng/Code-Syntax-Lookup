---
id: "java-en-function-builder-proxy"
language: "java"
lang: "en"
category: "function"
name: "Builder.proxy"
signature: "public Builder proxy(ProxySelector proxySelector)"
title: "Builder.proxy"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.proxy

```java
public Builder proxy(ProxySelector proxySelector)
```

Sets a `java.net.ProxySelector`.

 provides a `ProxySelector` which uses a single proxy for all
 requests. The system-wide proxy selector can be retrieved by
 `getDefault`.

 If this method is not invoked prior to `build() building`,
 then newly built clients will use the `getDefault() default proxy selector`, which is usually
 adequate for client applications. The default proxy selector supports
 a set of system properties related to
 
 proxy settings. This default behavior can be disabled by
 supplying an explicit proxy selector, such as `NO_PROXY` or
 one returned by `of(InetSocketAddress)
 ProxySelector::of`, before `build() building`.

**参数**

- **proxySelector** — the ProxySelector

**返回**

- this builder
