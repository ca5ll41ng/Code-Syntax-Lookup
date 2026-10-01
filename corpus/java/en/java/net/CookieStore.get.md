---
id: "java-en-function-cookiestore-get"
language: "java"
lang: "en"
category: "function"
name: "CookieStore.get"
signature: "public List<HttpCookie> get(URI uri)"
title: "CookieStore.get"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieStore.get

```java
public List<HttpCookie> get(URI uri)
```

Retrieve cookies associated with given URI, or whose domain matches the
 given URI. Only cookies that have not expired are returned.
 This is called for every outgoing HTTP request.

**参数**

- **uri** — the uri associated with the cookies to be returned

**返回**

- an immutable list of HttpCookie, return empty list if no cookies match the given URI

**异常**

- **NullPointerException** — if `uri` is `null`

**参见**

- #add
