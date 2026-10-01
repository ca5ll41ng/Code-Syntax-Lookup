---
id: "java-en-function-httpurlconnection-getfollowredirects"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.getFollowRedirects"
signature: "public static boolean getFollowRedirects()"
title: "HttpURLConnection.getFollowRedirects"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.getFollowRedirects

```java
public static boolean getFollowRedirects()
```

Returns a `boolean` indicating
 whether or not HTTP redirects (3xx) should
 be automatically followed.

**返回**

- `true` if HTTP redirects should be automatically followed, `false` if not.

**参见**

- #setFollowRedirects(boolean)
