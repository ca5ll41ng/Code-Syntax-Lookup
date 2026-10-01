---
id: "java-en-function-x509certselector-getauthoritykeyidentifier"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.getAuthorityKeyIdentifier"
signature: "public byte[] getAuthorityKeyIdentifier()"
title: "X509CertSelector.getAuthorityKeyIdentifier"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.getAuthorityKeyIdentifier

```java
public byte[] getAuthorityKeyIdentifier()
```

Returns the authorityKeyIdentifier criterion. The
 `X509Certificate` must contain a AuthorityKeyIdentifier
 extension with the specified value. If `null`, no
 authorityKeyIdentifier check will be done.
 

 Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- the key identifier (or `null`)

**参见**

- #setAuthorityKeyIdentifier
