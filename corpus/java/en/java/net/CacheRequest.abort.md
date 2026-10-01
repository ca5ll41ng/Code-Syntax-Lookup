---
id: "java-en-function-cacherequest-abort"
language: "java"
lang: "en"
category: "function"
name: "CacheRequest.abort"
signature: "public abstract void abort()"
title: "CacheRequest.abort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CacheRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CacheRequest.abort

```java
public abstract void abort()
```

Aborts the attempt to cache the response. If an IOException is
 encountered while reading the response or writing to the cache,
 the current cache store operation will be abandoned.
