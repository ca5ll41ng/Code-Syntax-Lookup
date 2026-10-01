---
id: "java-en-function-keystorespi-enginesetentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineSetEntry"
signature: "public void engineSetEntry(String alias, KeyStore.Entry entry, KeyStore.ProtectionParameter protParam) throws KeyStoreException"
title: "KeyStoreSpi.engineSetEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineSetEntry

```java
public void engineSetEntry(String alias, KeyStore.Entry entry, KeyStore.ProtectionParameter protParam) throws KeyStoreException
```

Saves a `KeyStore.Entry` under the specified alias.
 The specified protection parameter is used to protect the
 `Entry`.

 

 If an entry already exists for the specified alias,
 it is overridden.

**参数**

- **alias** — save the `KeyStore.Entry` under this alias
- **entry** — the `Entry` to save
- **protParam** — the `ProtectionParameter` used to protect the `Entry`, which may be `null`

**异常**

- **KeyStoreException** — if this operation fails

> *Since 1.5*
