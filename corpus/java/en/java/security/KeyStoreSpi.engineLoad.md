---
id: "java-en-function-keystorespi-engineload"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineLoad"
signature: "public abstract void engineLoad(InputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException"
title: "KeyStoreSpi.engineLoad"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineLoad

```java
public abstract void engineLoad(InputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException
```

Loads the keystore from the given input stream.

 

A password may be given to unlock the keystore
 (e.g. the keystore resides on a hardware token device),
 or to check the integrity of the keystore data.
 If a password is not given for integrity checking,
 then integrity checking is not performed.

**参数**

- **stream** — the input stream from which the keystore is loaded, or `null`
- **password** — the password used to check the integrity of the keystore, the password used to unlock the keystore, or `null`

**异常**

- **IOException** — if there is an I/O or format problem with the keystore data, if a password is required but not given, or if the given password was incorrect. If the error is due to a wrong password, the `getCause cause` of the `IOException` should be an `UnrecoverableKeyException`
- **NoSuchAlgorithmException** — if the algorithm used to check the integrity of the keystore cannot be found
- **CertificateException** — if any of the certificates in the keystore could not be loaded
