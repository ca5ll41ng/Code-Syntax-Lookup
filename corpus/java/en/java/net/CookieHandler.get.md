---
id: "java-en-function-cookiehandler-get"
language: "java"
lang: "en"
category: "function"
name: "CookieHandler.get"
signature: "public abstract Map<String, List<String>> get(URI uri, Map<String, List<String>> requestHeaders) throws IOException"
title: "CookieHandler.get"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieHandler.get

```java
public abstract Map<String, List<String>> get(URI uri, Map<String, List<String>> requestHeaders) throws IOException
```

Gets all the applicable cookies from a cookie cache for the
 specified uri in the request header.

 

The `URI` passed as an argument specifies the intended use for
 the cookies. In particular the scheme should reflect whether the cookies
 will be sent over http, https or used in another context like javascript.
 The host part should reflect either the destination of the cookies or
 their origin in the case of javascript.
 

It is up to the implementation to take into account the `URI` and
 the cookies attributes and security settings to determine which ones
 should be returned.

 

HTTP protocol implementers should make sure that this method is
 called after all request headers related to choosing cookies
 are added, and before the request is sent.

**参数**

- **uri** — a `URI` representing the intended use for the cookies
- **requestHeaders** — a Map from request header field names to lists of field values representing the current request headers

**返回**

- an immutable map from state management headers, with field names "Cookie" or "Cookie2" to a list of cookies containing state information

**异常**

- **IOException** — if an I/O error occurs
- **IllegalArgumentException** — if either argument is null

**参见**

- #put(URI, Map)
