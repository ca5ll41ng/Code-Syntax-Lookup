---
id: "java-en-function-cacherequest-getbody"
language: "java"
lang: "en"
category: "function"
name: "CacheRequest.getBody"
signature: "public abstract OutputStream getBody() throws IOException"
title: "CacheRequest.getBody"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CacheRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CacheRequest.getBody

```java
public abstract OutputStream getBody() throws IOException
```

Returns an OutputStream to which the response body can be
 written.

**返回**

- an OutputStream to which the response body can be written

**异常**

- **IOException** — if an I/O error occurs while writing the response body
