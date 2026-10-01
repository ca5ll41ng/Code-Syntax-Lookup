---
id: "java-en-function-httpurlconnection-disconnect"
language: "java"
lang: "en"
category: "function"
name: "HttpURLConnection.disconnect"
signature: "public abstract void disconnect()"
title: "HttpURLConnection.disconnect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpURLConnection.disconnect

```java
public abstract void disconnect()
```

Indicates that other requests to the server
 are unlikely in the near future. Calling disconnect()
 should not imply that this HttpURLConnection
 instance can be reused for other requests.
