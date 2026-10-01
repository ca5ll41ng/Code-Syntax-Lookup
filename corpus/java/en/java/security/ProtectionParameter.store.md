---
id: "java-en-function-protectionparameter-store"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.store"
signature: "public final void store(OutputStream stream, char[] password) throws KeyStoreException, IOException, NoSuchAlgorithmException, CertificateException"
title: "ProtectionParameter.store"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.store

```java
public final void store(OutputStream stream, char[] password) throws KeyStoreException, IOException, NoSuchAlgorithmException, CertificateException
```

Stores this keystore to the given output stream, and protects its
 integrity with the given password.

**参数**

- **stream** — the output stream to which this keystore is written.
- **password** — the password to generate the keystore integrity check. May be `null` if the keystore does not support or require an integrity check.

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
- **IOException** — if there was an I/O problem with data
- **NoSuchAlgorithmException** — if the appropriate data integrity algorithm could not be found
- **CertificateException** — if any of the certificates included in the keystore data could not be stored
