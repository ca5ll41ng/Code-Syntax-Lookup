---
id: "java-en-function-privatekeyentry-getcertificatechain"
language: "java"
lang: "en"
category: "function"
name: "PrivateKeyEntry.getCertificateChain"
signature: "public Certificate[] getCertificateChain()"
title: "PrivateKeyEntry.getCertificateChain"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateKeyEntry.getCertificateChain

```java
public Certificate[] getCertificateChain()
```

Gets the `Certificate` chain from this entry.

 

 The stored chain is cloned before being returned.

**返回**

- an array of `Certificate`s corresponding to the certificate chain for the public key. If the certificates are of type X.509, the runtime type of the returned array is `X509Certificate[]`.
