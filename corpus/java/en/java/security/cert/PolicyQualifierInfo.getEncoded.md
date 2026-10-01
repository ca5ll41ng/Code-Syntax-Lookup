---
id: "java-en-function-policyqualifierinfo-getencoded"
language: "java"
lang: "en"
category: "function"
name: "PolicyQualifierInfo.getEncoded"
signature: "public final byte[] getEncoded()"
title: "PolicyQualifierInfo.getEncoded"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyQualifierInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyQualifierInfo.getEncoded

```java
public final byte[] getEncoded()
```

Returns the ASN.1 DER encoded form of this
 `PolicyQualifierInfo`.

**返回**

- the ASN.1 DER encoded bytes (never `null`). Note that a copy is returned, so the data is cloned each time this method is called.
