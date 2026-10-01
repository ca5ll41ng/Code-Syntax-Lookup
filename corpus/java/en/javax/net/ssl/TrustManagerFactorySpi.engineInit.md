---
id: "java-en-function-trustmanagerfactoryspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactorySpi.engineInit"
signature: "protected abstract void engineInit(KeyStore ks) throws KeyStoreException"
title: "TrustManagerFactorySpi.engineInit"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactorySpi.engineInit

```java
protected abstract void engineInit(KeyStore ks) throws KeyStoreException
```

Initializes this factory with a source of certificate
 authorities and related trust material.

**参数**

- **ks** — the key store or null

**异常**

- **KeyStoreException** — if this operation fails

**参见**

- TrustManagerFactory#init(KeyStore)
