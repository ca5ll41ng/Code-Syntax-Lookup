---
id: "java-en-function-httpcookie-ishttponly"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.isHttpOnly"
signature: "public boolean isHttpOnly()"
title: "HttpCookie.isHttpOnly"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.isHttpOnly

```java
public boolean isHttpOnly()
```

Returns `true` if this cookie contains the HttpOnly
 attribute. This means that the cookie should not be accessible to
 scripting engines, like javascript.

**返回**

- `true` if this cookie should be considered HTTPOnly

**参见**

- #setHttpOnly(boolean)
