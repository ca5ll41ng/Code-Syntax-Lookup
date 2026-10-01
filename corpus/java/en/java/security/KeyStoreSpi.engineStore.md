---
id: "java-en-function-keystorespi-enginestore"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineStore"
signature: "public abstract void engineStore(OutputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException"
title: "KeyStoreSpi.engineStore"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineStore

```java
public abstract void engineStore(OutputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException
```

Stores this keystore to the given output stream, and protects its
 integrity with the given password.

**参数**

- **stream** — the output stream to which this keystore is written.
- **password** — the password to generate the keystore integrity check. May be `null` if the keystore does not support or require an integrity check.

**异常**

- **IOException** — if there was an I/O problem with data
- **NoSuchAlgorithmException** — if the appropriate data integrity algorithm could not be found
- **CertificateException** — if any of the certificates included in the keystore data could not be stored
