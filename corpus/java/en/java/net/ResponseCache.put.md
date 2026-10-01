---
id: "java-en-function-responsecache-put"
language: "java"
lang: "en"
category: "function"
name: "ResponseCache.put"
signature: "public abstract CacheRequest put(URI uri, URLConnection conn) throws IOException"
title: "ResponseCache.put"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ResponseCache.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResponseCache.put

```java
public abstract CacheRequest put(URI uri, URLConnection conn) throws IOException
```

The protocol handler calls this method after a resource has
 been retrieved, and the ResponseCache must decide whether or
 not to store the resource in its cache. If the resource is to
 be cached, then put() must return a CacheRequest object which
 contains an OutputStream that the protocol handler will
 use to write the resource into the cache. If the resource is
 not to be cached, then put must return null.

**参数**

- **uri** — a `URI` used to reference the requested network resource
- **conn** — a URLConnection instance that is used to fetch the response to be cached

**返回**

- a `CacheRequest` for recording the response to be cached. Null return indicates that the caller does not intend to cache the response.

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if any one of the arguments is null
