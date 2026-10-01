---
id: "java-en-function-sslparameters-setuseciphersuitesorder"
language: "java"
lang: "en"
category: "function"
name: "SSLParameters.setUseCipherSuitesOrder"
signature: "public final void setUseCipherSuitesOrder(boolean honorOrder)"
title: "SSLParameters.setUseCipherSuitesOrder"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLParameters.setUseCipherSuitesOrder

```java
public final void setUseCipherSuitesOrder(boolean honorOrder)
```

Sets whether the local cipher suites preference should be honored.

**参数**

- **honorOrder** — whether local cipher suites order in `#getCipherSuites` should be honored during SSL/TLS/DTLS handshaking.

**参见**

- #getUseCipherSuitesOrder()

> *Since 1.8*
