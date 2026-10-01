---
id: "java-en-function-httpcookie-setsecure"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setSecure"
signature: "public void setSecure(boolean flag)"
title: "HttpCookie.setSecure"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setSecure

```java
public void setSecure(boolean flag)
```

Indicates whether the cookie should only be sent using a secure protocol,
 such as HTTPS or SSL.

 

 The default value is `false`.

**参数**

- **flag** — If `true`, the cookie can only be sent over a secure protocol like HTTPS. If `false`, it can be sent over any protocol.

**参见**

- #getSecure
