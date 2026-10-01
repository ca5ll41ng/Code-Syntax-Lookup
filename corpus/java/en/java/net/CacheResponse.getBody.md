---
id: "java-en-function-cacheresponse-getbody"
language: "java"
lang: "en"
category: "function"
name: "CacheResponse.getBody"
signature: "public abstract InputStream getBody() throws IOException"
title: "CacheResponse.getBody"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CacheResponse.getBody

```java
public abstract InputStream getBody() throws IOException
```

Returns the response body as an InputStream.

**返回**

- an InputStream from which the response body can be accessed

**异常**

- **IOException** — if an I/O error occurs while getting the response body
