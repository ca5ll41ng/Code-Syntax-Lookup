---
id: "java-en-function-httpsurlconnection-getciphersuite"
language: "java"
lang: "en"
category: "function"
name: "HttpsURLConnection.getCipherSuite"
signature: "public abstract String getCipherSuite()"
title: "HttpsURLConnection.getCipherSuite"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HttpsURLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpsURLConnection.getCipherSuite

```java
public abstract String getCipherSuite()
```

Returns the cipher suite in use on this connection.

**返回**

- the cipher suite

**异常**

- **IllegalStateException** — if this method is called before the connection has been established.
