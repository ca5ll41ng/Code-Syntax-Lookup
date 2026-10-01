---
id: "java-en-function-key-getformat"
language: "java"
lang: "en"
category: "function"
name: "Key.getFormat"
signature: "String getFormat()"
title: "Key.getFormat"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Key.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Key.getFormat

```java
String getFormat()
```

Returns the name of the primary encoding format of this key,
 or `null` if this key does not support encoding.
 The primary encoding format is
 named in terms of the appropriate ASN.1 data format, if an
 ASN.1 specification for this key exists.
 For example, the name of the ASN.1 data format for public
 keys is SubjectPublicKeyInfo, as
 defined by the X.509 standard; in this case, the returned format is
 `"X.509"`. Similarly,
 the name of the ASN.1 data format for private keys is
 PrivateKeyInfo,
 as defined by the PKCS #8 standard; in this case, the returned format is
 `"PKCS#8"`.

**返回**

- the primary encoding format of the key.
