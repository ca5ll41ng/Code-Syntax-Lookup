---
id: "java-en-function-protectionparameter-containsalias"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.containsAlias"
signature: "public final boolean containsAlias(String alias) throws KeyStoreException"
title: "ProtectionParameter.containsAlias"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.containsAlias

```java
public final boolean containsAlias(String alias) throws KeyStoreException
```

Checks if the given alias exists in this keystore.

**参数**

- **alias** — the alias name

**返回**

- `true` if the alias exists, `false` otherwise

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
