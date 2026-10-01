---
id: "java-en-function-protectionparameter-entryinstanceof"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.entryInstanceOf"
signature: "public final boolean entryInstanceOf(String alias, Class<? extends KeyStore.Entry> entryClass) throws KeyStoreException"
title: "ProtectionParameter.entryInstanceOf"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.entryInstanceOf

```java
public final boolean entryInstanceOf(String alias, Class<? extends KeyStore.Entry> entryClass) throws KeyStoreException
```

Determines if the keystore `Entry` for the specified
 `alias` is an instance or subclass of the specified
 `entryClass`.

**参数**

- **alias** — the alias name
- **entryClass** — the entry class

**返回**

- `true` if the keystore `Entry` for the specified `alias` is an instance or subclass of the specified `entryClass`, `false` otherwise

**异常**

- **NullPointerException** — if `alias` or `entryClass` is `null`
- **KeyStoreException** — if the keystore has not been initialized (loaded)

> *Since 1.5*
