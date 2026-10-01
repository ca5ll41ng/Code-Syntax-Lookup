---
id: "java-en-function-httpurlconnection-instancefollowredirects"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.instanceFollowRedirects"
signature: "protected boolean instanceFollowRedirects = followRedirects"
title: "HttpURLConnection.instanceFollowRedirects"
directive: "field"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.instanceFollowRedirects

```java
protected boolean instanceFollowRedirects = followRedirects
```

If `true`, the protocol will automatically follow redirects.
 If `false`, the protocol will not automatically follow
 redirects.
 

 This field is set by the `setInstanceFollowRedirects`
 method. Its value is returned by the `getInstanceFollowRedirects`
 method.
 

 Its default value is based on the value of the static followRedirects
 at HttpURLConnection construction time.

**参见**

- java.net.HttpURLConnection#setInstanceFollowRedirects(boolean)
- java.net.HttpURLConnection#getInstanceFollowRedirects()
- java.net.HttpURLConnection#setFollowRedirects(boolean)
