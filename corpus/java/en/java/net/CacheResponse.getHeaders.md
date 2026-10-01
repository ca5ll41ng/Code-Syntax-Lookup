---
id: "java-en-function-cacheresponse-getheaders"
language: "java"
lang: "en"
category: "function"
name: "CacheResponse.getHeaders"
signature: "public abstract Map<String, List<String>> getHeaders() throws IOException"
title: "CacheResponse.getHeaders"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CacheResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CacheResponse.getHeaders

```java
public abstract Map<String, List<String>> getHeaders() throws IOException
```

Returns the response headers as a Map.

**返回**

- An immutable Map from response header field names to lists of field values. The status line has null as its field name.

**异常**

- **IOException** — if an I/O error occurs while getting the response headers
