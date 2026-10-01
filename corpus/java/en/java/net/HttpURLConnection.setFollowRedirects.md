---
id: "java-en-function-httpurlconnection-setfollowredirects"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setFollowRedirects"
signature: "public static void setFollowRedirects(boolean set)"
title: "HttpURLConnection.setFollowRedirects"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setFollowRedirects

```java
public static void setFollowRedirects(boolean set)
```

Sets whether HTTP redirects  (requests with response code 3xx) should
 be automatically followed by this class.  True by default.

**参数**

- **set** — a `boolean` indicating whether or not to follow HTTP redirects.

**参见**

- #getFollowRedirects()
