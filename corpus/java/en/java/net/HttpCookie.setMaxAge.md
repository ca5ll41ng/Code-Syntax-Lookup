---
id: "java-en-function-httpcookie-setmaxage"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setMaxAge"
signature: "public void setMaxAge(long expiry)"
title: "HttpCookie.setMaxAge"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setMaxAge

```java
public void setMaxAge(long expiry)
```

Sets the maximum age of the cookie in seconds.

 

 A positive value indicates that the cookie will expire
 after that many seconds have passed. Note that the value is
 the maximum age when the cookie will expire, not the cookie's
 current age.

 

 A negative value means that the cookie is not stored persistently
 and will be deleted when the Web browser exits. A zero value causes the
 cookie to be deleted.

**参数**

- **expiry** — an integer specifying the maximum age of the cookie in seconds; if zero, the cookie should be discarded immediately; otherwise, the cookie's max age is unspecified.

**参见**

- #getMaxAge
