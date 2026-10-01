---
id: "java-en-function-protectionparameter-getcreationdate"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getCreationDate"
signature: "public final Date getCreationDate(String alias) throws KeyStoreException"
title: "ProtectionParameter.getCreationDate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getCreationDate

```java
public final Date getCreationDate(String alias) throws KeyStoreException
```

Returns the creation date of the entry identified by the given alias.
 

 It is recommended to use the `getCreationInstant`
 method instead.

**参数**

- **alias** — the alias name

**返回**

- the creation date of this entry, or `null` if the given alias does not exist

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
