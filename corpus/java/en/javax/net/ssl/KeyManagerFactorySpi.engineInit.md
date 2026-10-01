---
id: "java-en-function-keymanagerfactoryspi-engineinit"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactorySpi.engineInit"
signature: "protected abstract void engineInit(KeyStore ks, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException"
title: "KeyManagerFactorySpi.engineInit"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactorySpi.engineInit

```java
protected abstract void engineInit(KeyStore ks, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException
```

Initializes this factory with a source of key material.

**参数**

- **ks** — the key store or null
- **password** — the password for recovering keys

**异常**

- **KeyStoreException** — if this operation fails
- **NoSuchAlgorithmException** — if the specified algorithm is not available from the specified provider.
- **UnrecoverableKeyException** — if the key cannot be recovered

**参见**

- KeyManagerFactory#init(KeyStore, char[])
