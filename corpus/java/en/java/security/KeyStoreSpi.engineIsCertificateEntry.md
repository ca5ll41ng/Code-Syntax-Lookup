---
id: "java-en-function-keystorespi-engineiscertificateentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineIsCertificateEntry"
signature: "public abstract boolean engineIsCertificateEntry(String alias)"
title: "KeyStoreSpi.engineIsCertificateEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineIsCertificateEntry

```java
public abstract boolean engineIsCertificateEntry(String alias)
```

Returns `true` if the entry identified by the given alias
 was created by a call to `setCertificateEntry`,
 or created by a call to `setEntry` with a
 `TrustedCertificateEntry`.

**参数**

- **alias** — the alias for the keystore entry to be checked

**返回**

- `true` if the entry identified by the given alias contains a trusted certificate, `false` otherwise.
