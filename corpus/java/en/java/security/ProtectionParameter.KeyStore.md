---
id: "java-en-function-protectionparameter-keystore"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.KeyStore"
signature: "protected KeyStore(KeyStoreSpi keyStoreSpi, Provider provider, String type)"
title: "ProtectionParameter.KeyStore"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.KeyStore

```java
protected KeyStore(KeyStoreSpi keyStoreSpi, Provider provider, String type)
```

Creates a `KeyStore` object of the given type, and encapsulates
 the given provider implementation (SPI object) in it.

**参数**

- **keyStoreSpi** — the provider implementation.
- **provider** — the provider.
- **type** — the keystore type.
