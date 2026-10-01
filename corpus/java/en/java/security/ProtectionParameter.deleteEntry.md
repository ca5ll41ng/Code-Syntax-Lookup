---
id: "java-en-function-protectionparameter-deleteentry"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.deleteEntry"
signature: "public final void deleteEntry(String alias) throws KeyStoreException"
title: "ProtectionParameter.deleteEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.deleteEntry

```java
public final void deleteEntry(String alias) throws KeyStoreException
```

Deletes the entry identified by the given alias from this keystore.

**参数**

- **alias** — the alias name

**异常**

- **KeyStoreException** — if the keystore has not been initialized, or if the entry cannot be removed.
