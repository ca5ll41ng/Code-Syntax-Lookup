---
id: "java-en-function-x500principal-getencoded"
language: "java"
lang: "en"
category: "function"
name: "X500Principal.getEncoded"
signature: "public byte[] getEncoded()"
title: "X500Principal.getEncoded"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal.getEncoded

```java
public byte[] getEncoded()
```

Returns the distinguished name in ASN.1 DER encoded form. The ASN.1
 notation for this structure is supplied in the documentation for
 `X500Principal`.

 

Note that the byte array returned is cloned to protect against
 subsequent modifications.

**返回**

- a byte array containing the distinguished name in ASN.1 DER encoded form
