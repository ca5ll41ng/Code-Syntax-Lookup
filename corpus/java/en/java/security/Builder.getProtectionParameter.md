---
id: "java-en-function-builder-getprotectionparameter"
language: "java"
lang: "en"
category: "function"
name: "Builder.getProtectionParameter"
signature: "public abstract ProtectionParameter getProtectionParameter(String alias) throws KeyStoreException"
title: "Builder.getProtectionParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.getProtectionParameter

```java
public abstract ProtectionParameter getProtectionParameter(String alias) throws KeyStoreException
```

Returns the `ProtectionParameter` that should be used to obtain
 the `KeyStore.Entry Entry` with the given alias.
 The `getKeyStore` method must be invoked before this
 method may be called.

**参数**

- **alias** — the alias of the `KeyStore` entry

**返回**

- the `ProtectionParameter` that should be used to obtain the `KeyStore.Entry Entry` with the given alias.

**异常**

- **NullPointerException** — if alias is `null`
- **KeyStoreException** — if an error occurred during the operation
- **IllegalStateException** — if the `getKeyStore` method has not been invoked prior to calling this method
