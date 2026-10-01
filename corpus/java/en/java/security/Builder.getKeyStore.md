---
id: "java-en-function-builder-getkeystore"
language: "java"
lang: "en"
category: "function"
name: "Builder.getKeyStore"
signature: "public abstract KeyStore getKeyStore() throws KeyStoreException"
title: "Builder.getKeyStore"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.getKeyStore

```java
public abstract KeyStore getKeyStore() throws KeyStoreException
```

Returns the `KeyStore` described by this object.

**返回**

- the `KeyStore` described by this object

**异常**

- **KeyStoreException** — if an error occurred during the operation, for example if the `KeyStore` could not be instantiated or loaded
