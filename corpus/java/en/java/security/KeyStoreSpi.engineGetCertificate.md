---
id: "java-en-function-keystorespi-enginegetcertificate"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetCertificate"
signature: "public abstract Certificate engineGetCertificate(String alias)"
title: "KeyStoreSpi.engineGetCertificate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetCertificate

```java
public abstract Certificate engineGetCertificate(String alias)
```

Returns the certificate associated with the given alias.

 

 If the given alias name identifies an entry
 created by a call to `setCertificateEntry`,
 or created by a call to `setEntry` with a
 `TrustedCertificateEntry`,
 then the trusted certificate contained in that entry is returned.

 

 If the given alias name identifies an entry
 created by a call to `setKeyEntry`,
 or created by a call to `setEntry` with a
 `PrivateKeyEntry`,
 then the first element of the certificate chain in that entry
 (if a chain exists) is returned.

**参数**

- **alias** — the alias name

**返回**

- the certificate, or `null` if the given alias does not exist or does not contain a certificate.
