---
id: "java-en-function-sslparameters-setwantclientauth"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setWantClientAuth"
signature: "public void setWantClientAuth(boolean wantClientAuth)"
title: "SSLParameters.setWantClientAuth"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setWantClientAuth

```java
public void setWantClientAuth(boolean wantClientAuth)
```

Sets whether client authentication should be requested. Calling
 this method clears the `needClientAuth` flag.

**参数**

- **wantClientAuth** — whether client authentication should be requested
