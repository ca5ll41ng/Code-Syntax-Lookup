---
id: "java-en-function-protectionparameter-getcreationinstant"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getCreationInstant"
signature: "public final Instant getCreationInstant(String alias) throws KeyStoreException"
title: "ProtectionParameter.getCreationInstant"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getCreationInstant

```java
public final Instant getCreationInstant(String alias) throws KeyStoreException
```

Returns the instant that the entry identified by the given alias was
 created.

**参数**

- **alias** — the alias name

**返回**

- the instant that the entry identified by the given alias was created, or `null` if the given alias does not exist

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded)

> *Since 27*
