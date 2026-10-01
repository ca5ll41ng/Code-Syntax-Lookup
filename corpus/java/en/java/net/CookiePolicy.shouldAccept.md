---
id: "java-en-function-cookiepolicy-shouldaccept"
language: "java"
lang: "en"
category: "function"
name: "CookiePolicy.shouldAccept"
signature: "public boolean shouldAccept(URI uri, HttpCookie cookie)"
title: "CookiePolicy.shouldAccept"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookiePolicy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookiePolicy.shouldAccept

```java
public boolean shouldAccept(URI uri, HttpCookie cookie)
```

Will be called to see whether or not this cookie should be accepted.

**参数**

- **uri** — the URI to consult accept policy with
- **cookie** — the HttpCookie object in question

**返回**

- `true` if this cookie should be accepted; otherwise, `false`
