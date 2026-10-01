---
id: "java-en-function-httpcookie-getmaxage"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.getMaxAge"
signature: "public long getMaxAge()"
title: "HttpCookie.getMaxAge"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.getMaxAge

```java
public long getMaxAge()
```

Returns the maximum age of the cookie, specified in seconds from the time
 the object was created. By default, `-1` indicating the cookie will
 persist until browser shutdown.

 The value of this attribute is determined by the following steps, in line
 with RFC 6265:

 
- If `setMaxAge` was called, return the value set.
 
- If previous step failed, and a `Max-Age` attribute was parsed
 then return that value.
 
- If previous step failed, and an `Expires` attribute was parsed
 then the maxAge calculated at parsing time from that date, is returned
 
- If previous step failed, then return `-1`.

**返回**

- an integer specifying the maximum age of the cookie in seconds

**参见**

- #setMaxAge
