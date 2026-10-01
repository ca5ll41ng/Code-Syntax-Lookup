---
id: "java-en-function-hostnameverifier-verify"
language: "java"
lang: "en"
category: "function"
name: "HostnameVerifier.verify"
signature: "boolean verify(String hostname, SSLSession session)"
title: "HostnameVerifier.verify"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HostnameVerifier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HostnameVerifier.verify

```java
boolean verify(String hostname, SSLSession session)
```

Verify that the host name is an acceptable match with
 the server's authentication scheme.

**参数**

- **hostname** — the host name
- **session** — SSLSession used on the connection to host

**返回**

- true if the host name is acceptable
