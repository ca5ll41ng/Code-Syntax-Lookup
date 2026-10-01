---
id: "java-en-function-inmemorycookiestore-get"
language: "java"
lang: "en"
category: "function"
name: "InMemoryCookieStore.get"
signature: "public List<HttpCookie> get(URI uri)"
title: "InMemoryCookieStore.get"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InMemoryCookieStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InMemoryCookieStore.get

```java
public List<HttpCookie> get(URI uri)
```

Get all cookies, which:
  1) given uri domain-matches with, or, associated with
     given uri when added to the cookie store.
  3) not expired.
 See RFC 2965 sec. 3.3.4 for more detail.
