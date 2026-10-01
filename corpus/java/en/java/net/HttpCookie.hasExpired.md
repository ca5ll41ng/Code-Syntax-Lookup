---
id: "java-en-function-httpcookie-hasexpired"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.hasExpired"
signature: "public boolean hasExpired()"
title: "HttpCookie.hasExpired"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.hasExpired

```java
public boolean hasExpired()
```

Reports whether this HTTP cookie has expired or not. This is
 based on whether `getMaxAge` seconds have elapsed since
 this object was created.

**返回**

- `true` to indicate this HTTP cookie has expired; otherwise, `false`
