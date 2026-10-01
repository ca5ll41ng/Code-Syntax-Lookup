---
id: "java-en-function-protectionparameter-setentry"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.setEntry"
signature: "public final void setEntry(String alias, Entry entry, ProtectionParameter protParam) throws KeyStoreException"
title: "ProtectionParameter.setEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.setEntry

```java
public final void setEntry(String alias, Entry entry, ProtectionParameter protParam) throws KeyStoreException
```

Saves a keystore `Entry` under the specified alias.
 The protection parameter is used to protect the
 `Entry`.

 

 If an entry already exists for the specified alias,
 it is overridden.

**参数**

- **alias** — save the keystore `Entry` under this alias
- **entry** — the `Entry` to save
- **protParam** — the `ProtectionParameter` used to protect the `Entry`, which may be `null`

**异常**

- **NullPointerException** — if `alias` or `entry` is `null`
- **KeyStoreException** — if the keystore has not been initialized (loaded), or if this operation fails for some other reason

**参见**

- #getEntry(String, KeyStore.ProtectionParameter)

> *Since 1.5*
