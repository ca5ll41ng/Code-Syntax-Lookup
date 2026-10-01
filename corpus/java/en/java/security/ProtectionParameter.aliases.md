---
id: "java-en-function-protectionparameter-aliases"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.aliases"
signature: "public final Enumeration<String> aliases() throws KeyStoreException"
title: "ProtectionParameter.aliases"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.aliases

```java
public final Enumeration<String> aliases() throws KeyStoreException
```

Lists all the alias names of this keystore.

**返回**

- enumeration of the alias names

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
