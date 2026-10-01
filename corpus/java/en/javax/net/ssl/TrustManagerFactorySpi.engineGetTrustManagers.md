---
id: "java-en-function-trustmanagerfactoryspi-enginegettrustmanagers"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactorySpi.engineGetTrustManagers"
signature: "protected abstract TrustManager[] engineGetTrustManagers()"
title: "TrustManagerFactorySpi.engineGetTrustManagers"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactorySpi.engineGetTrustManagers

```java
protected abstract TrustManager[] engineGetTrustManagers()
```

Returns one trust manager for each type of trust material.

**返回**

- the trust managers

**异常**

- **IllegalStateException** — if the factory is not initialized.
