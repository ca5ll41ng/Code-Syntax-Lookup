---
id: "java-en-function-cookiehandler-put"
language: "java"
lang: "en"
category: "function"
name: "CookieHandler.put"
signature: "public abstract void put(URI uri, Map<String, List<String>> responseHeaders) throws IOException"
title: "CookieHandler.put"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieHandler.put

```java
public abstract void put(URI uri, Map<String, List<String>> responseHeaders) throws IOException
```

Sets all the applicable cookies, examples are response header
 fields that are named Set-Cookie2, present in the response
 headers into a cookie cache.

**参数**

- **uri** — a `URI` where the cookies come from
- **responseHeaders** — an immutable map from field names to lists of field values representing the response header fields returned

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if either argument is null

**参见**

- #get(URI, Map)
