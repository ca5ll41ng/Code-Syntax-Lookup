---
id: "java-en-function-keystorespi-engineentryinstanceof"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineEntryInstanceOf"
signature: "public boolean engineEntryInstanceOf(String alias, Class<? extends KeyStore.Entry> entryClass)"
title: "KeyStoreSpi.engineEntryInstanceOf"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineEntryInstanceOf

```java
public boolean engineEntryInstanceOf(String alias, Class<? extends KeyStore.Entry> entryClass)
```

Determines if the keystore `Entry` for the specified
 `alias` is an instance or subclass of the specified
 `entryClass`.

**参数**

- **alias** — the alias name
- **entryClass** — the entry class

**返回**

- `true` if the keystore `Entry` for the specified `alias` is an instance or subclass of the specified `entryClass`, false otherwise

> *Since 1.5*
