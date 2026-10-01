---
id: "java-en-function-httpcookie-getsecure"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.getSecure"
signature: "public boolean getSecure()"
title: "HttpCookie.getSecure"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.getSecure

```java
public boolean getSecure()
```

Returns `true` if sending this cookie should be restricted to a
 secure protocol, or `false` if it can be sent using any
 protocol.

**返回**

- `false` if the cookie can be sent over any standard protocol; otherwise, `true`

**参见**

- #setSecure
