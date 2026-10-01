---
id: "java-en-function-keystorespi-enginegetcertificatechain"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetCertificateChain"
signature: "public abstract Certificate[] engineGetCertificateChain(String alias)"
title: "KeyStoreSpi.engineGetCertificateChain"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetCertificateChain

```java
public abstract Certificate[] engineGetCertificateChain(String alias)
```

Returns the certificate chain associated with the given alias.
 The certificate chain must have been associated with the alias
 by a call to `setKeyEntry`,
 or by a call to `setEntry` with a
 `PrivateKeyEntry`.

**参数**

- **alias** — the alias name

**返回**

- the certificate chain (ordered with the user's certificate first and the root certificate authority last), or `null` if the given alias * does not exist or does not contain a certificate chain
