---
id: "java-en-function-keystorespi-enginedeleteentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineDeleteEntry"
signature: "public abstract void engineDeleteEntry(String alias) throws KeyStoreException"
title: "KeyStoreSpi.engineDeleteEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineDeleteEntry

```java
public abstract void engineDeleteEntry(String alias) throws KeyStoreException
```

Deletes the entry identified by the given alias from this keystore.

**参数**

- **alias** — the alias name

**异常**

- **KeyStoreException** — if the entry cannot be removed.
