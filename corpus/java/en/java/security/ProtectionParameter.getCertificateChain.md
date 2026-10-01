---
id: "java-en-function-protectionparameter-getcertificatechain"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getCertificateChain"
signature: "public final Certificate[] getCertificateChain(String alias) throws KeyStoreException"
title: "ProtectionParameter.getCertificateChain"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getCertificateChain

```java
public final Certificate[] getCertificateChain(String alias) throws KeyStoreException
```

Returns the certificate chain associated with the given alias.
 The certificate chain must have been associated with the alias
 by a call to `setKeyEntry`,
 or by a call to `setEntry` with a
 `PrivateKeyEntry`.

**参数**

- **alias** — the alias name

**返回**

- the certificate chain (ordered with the user's certificate first followed by zero or more certificate authorities), or `null` if the given alias does not exist or does not contain a certificate chain

**异常**

- **KeyStoreException** — if the keystore has not been initialized (loaded).
