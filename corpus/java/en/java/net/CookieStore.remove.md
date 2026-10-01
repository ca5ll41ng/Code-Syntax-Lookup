---
id: "java-en-function-cookiestore-remove"
language: "java"
lang: "en"
category: "function"
name: "CookieStore.remove"
signature: "public boolean remove(URI uri, HttpCookie cookie)"
title: "CookieStore.remove"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieStore.remove

```java
public boolean remove(URI uri, HttpCookie cookie)
```

Remove a cookie from store.

**参数**

- **uri** — the uri this cookie associated with. if `null`, the cookie to be removed is not associated with an URI when added; if not `null`, the cookie to be removed is associated with the given URI when added.
- **cookie** — the cookie to remove

**返回**

- `true` if this store contained the specified cookie

**异常**

- **NullPointerException** — if `cookie` is `null`
