---
id: "java-en-function-protectionparameter-getcertificate"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getCertificate"
signature: "public final Certificate getCertificate(String alias) throws KeyStoreException"
title: "ProtectionParameter.getCertificate"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getCertificate

```java
public final Certificate getCertificate(String alias) throws KeyStoreException
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
 is returned.

**参数**

- **alias** — the alias name

**返回**

- the certificate, or `null` if the given alias does not exist or does not contain a certificate.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
