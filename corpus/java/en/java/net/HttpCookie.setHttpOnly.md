---
id: "java-en-function-httpcookie-sethttponly"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setHttpOnly"
signature: "public void setHttpOnly(boolean httpOnly)"
title: "HttpCookie.setHttpOnly"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setHttpOnly

```java
public void setHttpOnly(boolean httpOnly)
```

Indicates whether the cookie should be considered HTTP Only. If set to
 `true` it means the cookie should not be accessible to scripting
 engines like javascript.

**参数**

- **httpOnly** — if `true` make the cookie HTTP only, i.e. only visible as part of an HTTP request.

**参见**

- #isHttpOnly()
