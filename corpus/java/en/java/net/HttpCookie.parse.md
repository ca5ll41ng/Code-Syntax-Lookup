---
id: "java-en-function-httpcookie-parse"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.parse"
signature: "public static List<HttpCookie> parse(String header)"
title: "HttpCookie.parse"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.parse

```java
public static List<HttpCookie> parse(String header)
```

Constructs cookies from set-cookie or set-cookie2 header string.
 RFC 2965 section 3.2.2 set-cookie2 syntax indicates that one header line
 may contain more than one cookie definitions, so this is a static
 utility method instead of another constructor.

**参数**

- **header** — a `String` specifying the set-cookie header. The header should start with "set-cookie", or "set-cookie2" token; or it should have no leading token at all.

**返回**

- a List of cookie parsed from header line string

**异常**

- **IllegalArgumentException** — if header string violates the cookie specification's syntax or the cookie name contains illegal characters.
- **NullPointerException** — if the header string is `null`
