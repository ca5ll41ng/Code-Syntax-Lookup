---
id: "java-en-function-cookiestore-getcookies"
language: "java"
lang: "en"
category: "function"
name: "CookieStore.getCookies"
signature: "public List<HttpCookie> getCookies()"
title: "CookieStore.getCookies"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieStore.getCookies

```java
public List<HttpCookie> getCookies()
```

Get all not-expired cookies in cookie store.

**返回**

- an immutable list of http cookies; return empty list if there's no http cookie in store
