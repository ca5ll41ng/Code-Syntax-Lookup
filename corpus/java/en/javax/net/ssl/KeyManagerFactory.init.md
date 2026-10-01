---
id: "java-en-function-keymanagerfactory-init"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactory.init"
signature: "public final void init(KeyStore ks, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException"
title: "KeyManagerFactory.init"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactory.init

```java
public final void init(KeyStore ks, char[] password) throws KeyStoreException, NoSuchAlgorithmException, UnrecoverableKeyException
```

Initializes this factory with a source of key material.
 

 The provider typically uses a KeyStore for obtaining
 key material for use during secure socket negotiations.
 The KeyStore is generally password-protected.
 

 For more flexible initialization, please see
 `init`.

**参数**

- **ks** — the key store or null
- **password** — the password for recovering keys in the KeyStore

**异常**

- **KeyStoreException** — if this operation fails
- **NoSuchAlgorithmException** — if the specified algorithm is not available from the specified provider.
- **UnrecoverableKeyException** — if the key cannot be recovered (e.g. the given password is wrong).
