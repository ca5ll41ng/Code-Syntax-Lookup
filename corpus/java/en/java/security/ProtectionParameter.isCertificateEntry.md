---
id: "java-en-function-protectionparameter-iscertificateentry"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.isCertificateEntry"
signature: "public final boolean isCertificateEntry(String alias) throws KeyStoreException"
title: "ProtectionParameter.isCertificateEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.isCertificateEntry

```java
public final boolean isCertificateEntry(String alias) throws KeyStoreException
```

Returns `true` if the entry identified by the given alias
 was created by a call to `setCertificateEntry`,
 or created by a call to `setEntry` with a
 `TrustedCertificateEntry`.

**参数**

- **alias** — the alias for the keystore entry to be checked

**返回**

- `true` if the entry identified by the given alias contains a trusted certificate, `false` otherwise.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
