---
id: "java-en-function-httpcookie-setpath"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.setPath"
signature: "public void setPath(String uri)"
title: "HttpCookie.setPath"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.setPath

```java
public void setPath(String uri)
```

Specifies a path for the cookie to which the client should return
 the cookie.

 

 The cookie is visible to all the pages in the directory
 you specify, and all the pages in that directory's subdirectories.
 A cookie's path must include the servlet that set the cookie,
 for example, /catalog, which makes the cookie
 visible to all directories on the server under /catalog.

 

 Consult RFC 2965 (available on the Internet) for more
 information on setting path names for cookies.

**参数**

- **uri** — a `String` specifying a path

**参见**

- #getPath
