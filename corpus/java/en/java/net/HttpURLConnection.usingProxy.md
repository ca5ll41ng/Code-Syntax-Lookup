---
id: "java-en-function-httpurlconnection-usingproxy"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.usingProxy"
signature: "public abstract boolean usingProxy()"
title: "HttpURLConnection.usingProxy"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.usingProxy

```java
public abstract boolean usingProxy()
```

Indicates if the connection is going through a proxy.

 This method returns `true` if the connection is known
 to be going or has gone through proxies, and returns `false`
 if the connection will never go through a proxy or if
 the use of a proxy cannot be determined.

**返回**

- a boolean indicating if the connection is using a proxy.
