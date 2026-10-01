---
id: "java-en-function-httpcookie-setversion"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setVersion"
signature: "public void setVersion(int v)"
title: "HttpCookie.setVersion"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setVersion

```java
public void setVersion(int v)
```

Sets the version of the cookie protocol this cookie complies
 with. Version 0 complies with the original Netscape cookie
 specification. Version 1 complies with RFC 2965/2109.

**参数**

- **v** — 0 if the cookie should comply with the original Netscape specification; 1 if the cookie should comply with RFC 2965/2109

**异常**

- **IllegalArgumentException** — if `v` is neither 0 nor 1

**参见**

- #getVersion
