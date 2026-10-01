---
id: "java-en-function-protectionparameter-getcertificatealias"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getCertificateAlias"
signature: "public final String getCertificateAlias(Certificate cert) throws KeyStoreException"
title: "ProtectionParameter.getCertificateAlias"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getCertificateAlias

```java
public final String getCertificateAlias(Certificate cert) throws KeyStoreException
```

Returns the (alias) name of the first keystore entry whose certificate
 matches the given certificate.

 

 This method attempts to match the given certificate with each
 keystore entry. If the entry being considered was
 created by a call to `setCertificateEntry`,
 or created by a call to `setEntry` with a
 `TrustedCertificateEntry`,
 then the given certificate is compared to that entry's certificate.

 

 If the entry being considered was
 created by a call to `setKeyEntry`,
 or created by a call to `setEntry` with a
 `PrivateKeyEntry`,
 then the given certificate is compared to the first
 element of that entry's certificate chain.

**参数**

- **cert** — the certificate to match with.

**返回**

- the alias name of the first entry with a matching certificate, or `null` if no such entry exists in this keystore.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
