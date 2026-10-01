---
id: "java-en-function-protectionparameter-load"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.load"
signature: "public final void load(InputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException"
title: "ProtectionParameter.load"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.load

```java
public final void load(InputStream stream, char[] password) throws IOException, NoSuchAlgorithmException, CertificateException
```

Loads this keystore from the given input stream.

 

A password may be given to unlock the keystore
 (e.g. the keystore resides on a hardware token device),
 or to check the integrity of the keystore data.
 If a password is not given for integrity checking,
 then integrity checking is not performed.

 

In order to create an empty keystore, or if the keystore cannot
 be initialized from a stream, pass `null`
 as the `stream` argument.

 

 Note that if this keystore has already been loaded, it is
 reinitialized and loaded again from the given input stream.

**参数**

- **stream** — the input stream from which the keystore is loaded, or `null`
- **password** — the password used to check the integrity of the keystore, the password used to unlock the keystore, or `null`

**异常**

- **IOException** — if there is an I/O or format problem with the keystore data, if a password is required but not given, or if the given password was incorrect. If the error is due to a wrong password, the `getCause cause` of the `IOException` should be an `UnrecoverableKeyException`
- **NoSuchAlgorithmException** — if the algorithm used to check the integrity of the keystore cannot be found
- **CertificateException** — if any of the certificates in the keystore could not be loaded
