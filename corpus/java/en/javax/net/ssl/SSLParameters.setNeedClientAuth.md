---
id: "java-en-function-sslparameters-setneedclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setNeedClientAuth"
signature: "public void setNeedClientAuth(boolean needClientAuth)"
title: "SSLParameters.setNeedClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setNeedClientAuth

```java
public void setNeedClientAuth(boolean needClientAuth)
```

Sets whether client authentication should be required. Calling
 this method clears the `wantClientAuth` flag.

**参数**

- **needClientAuth** — whether client authentication should be required
