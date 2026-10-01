---
id: "java-en-function-trustmanagerfactory-init"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactory.init"
signature: "public final void init(KeyStore ks) throws KeyStoreException"
title: "TrustManagerFactory.init"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactory.init

```java
public final void init(KeyStore ks) throws KeyStoreException
```

Initializes this factory with a source of certificate
 authorities and related trust material.
 

 The provider typically uses a KeyStore as a basis for making
 trust decisions.
 

 For more flexible initialization, please see
 `init`.

**参数**

- **ks** — the key store, or null

**异常**

- **KeyStoreException** — if this operation fails
