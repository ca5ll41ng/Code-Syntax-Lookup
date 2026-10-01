---
id: "java-en-function-responsecache-get"
language: "java"
lang: "en"
category: "function"
name: "ResponseCache.get"
signature: "public abstract CacheResponse get(URI uri, String rqstMethod, Map<String, List<String>> rqstHeaders) throws IOException"
title: "ResponseCache.get"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ResponseCache.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResponseCache.get

```java
public abstract CacheResponse get(URI uri, String rqstMethod, Map<String, List<String>> rqstHeaders) throws IOException
```

Retrieve the cached response based on the requesting uri,
 request method and request headers. Typically this method is
 called by the protocol handler before it sends out the request
 to get the network resource. If a cached response is returned,
 that resource is used instead.

**参数**

- **uri** — a `URI` used to reference the requested network resource
- **rqstMethod** — a `String` representing the request method
- **rqstHeaders** — a Map from request header field names to lists of field values representing the current request headers

**返回**

- a `CacheResponse` instance if available from cache, or null otherwise

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if any one of the arguments is null

**参见**

- java.net.URLConnection#setUseCaches(boolean)
- java.net.URLConnection#getUseCaches()
- java.net.URLConnection#setDefaultUseCaches(boolean)
- java.net.URLConnection#getDefaultUseCaches()
