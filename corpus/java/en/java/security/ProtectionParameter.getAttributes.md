---
id: "java-en-function-protectionparameter-getattributes"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getAttributes"
signature: "public final Set<Entry.Attribute> getAttributes(String alias) throws KeyStoreException"
title: "ProtectionParameter.getAttributes"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getAttributes

```java
public final Set<Entry.Attribute> getAttributes(String alias) throws KeyStoreException
```

Retrieves the attributes associated with the given alias.

**参数**

- **alias** — the alias name

**返回**

- an unmodifiable `Set` of attributes. This set is empty if the `KeyStoreSpi` implementation has not overridden `engineGetAttributes`, or the given alias does not exist, or there are no attributes associated with the alias. This set may also be empty for `PrivateKeyEntry` or `SecretKeyEntry` entries that contain protected attributes and are only available through the `getAttributes` method after the entry is extracted.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
- **NullPointerException** — if `alias` is `null`

> *Since 18*
