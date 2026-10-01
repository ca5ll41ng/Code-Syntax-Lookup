---
id: "java-en-function-keystorespi-enginesetcertificateentry"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineSetCertificateEntry"
signature: "public abstract void engineSetCertificateEntry(String alias, Certificate cert) throws KeyStoreException"
title: "KeyStoreSpi.engineSetCertificateEntry"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineSetCertificateEntry

```java
public abstract void engineSetCertificateEntry(String alias, Certificate cert) throws KeyStoreException
```

Assigns the given certificate to the given alias.

 

 If the given alias identifies an existing entry
 created by a call to `setCertificateEntry`,
 or created by a call to `setEntry` with a
 `TrustedCertificateEntry`,
 the trusted certificate in the existing entry
 is overridden by the given certificate.

**参数**

- **alias** — the alias name
- **cert** — the certificate

**异常**

- **KeyStoreException** — if the given alias already exists and does not identify an entry containing a trusted certificate, or this operation fails for some other reason.
