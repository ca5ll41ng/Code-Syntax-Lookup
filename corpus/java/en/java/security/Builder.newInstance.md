---
id: "java-en-function-builder-newinstance"
language: "java"
lang: "en"
category: "function"
name: "Builder.newInstance"
signature: "public static Builder newInstance(final KeyStore keyStore, final ProtectionParameter protectionParameter)"
title: "Builder.newInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.newInstance

```java
public static Builder newInstance(final KeyStore keyStore, final ProtectionParameter protectionParameter)
```

Returns a new `Builder` that encapsulates the given
 `KeyStore`.
 The `getKeyStore` method of the returned object
 will return `keyStore`, the `getProtectionParameter getProtectionParameter` method will
 return `protectionParameters`.

 

 This is useful if an existing `KeyStore` object needs to be
 used with builder-based APIs.

**参数**

- **keyStore** — the `KeyStore` to be encapsulated
- **protectionParameter** — the `ProtectionParameter` used to protect the `KeyStore` entries

**返回**

- a new `Builder` object

**异常**

- **NullPointerException** — if `keyStore` or `protectionParameter` is `null`
- **IllegalArgumentException** — if the `keyStore` has not been initialized
