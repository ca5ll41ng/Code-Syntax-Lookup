---
id: "java-en-function-httpurlconnection-setinstancefollowredirects"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.setInstanceFollowRedirects"
signature: "public void setInstanceFollowRedirects(boolean followRedirects)"
title: "HttpURLConnection.setInstanceFollowRedirects"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.setInstanceFollowRedirects

```java
public void setInstanceFollowRedirects(boolean followRedirects)
```

Sets whether HTTP redirects (requests with response code 3xx) should
 be automatically followed by this `HttpURLConnection`
 instance.
 

 The default value comes from followRedirects, which defaults to
 true.

**参数**

- **followRedirects** — a `boolean` indicating whether or not to follow HTTP redirects.

**参见**

- java.net.HttpURLConnection#instanceFollowRedirects
- #getInstanceFollowRedirects

> *Since 1.3*
