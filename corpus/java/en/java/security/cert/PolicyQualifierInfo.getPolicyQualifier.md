---
id: "java-en-function-policyqualifierinfo-getpolicyqualifier"
language: "java"
lang: "en"
category: "function"
name: "PolicyQualifierInfo.getPolicyQualifier"
signature: "public final byte[] getPolicyQualifier()"
title: "PolicyQualifierInfo.getPolicyQualifier"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyQualifierInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyQualifierInfo.getPolicyQualifier

```java
public final byte[] getPolicyQualifier()
```

Returns the ASN.1 DER encoded form of the `qualifier`
 field of this `PolicyQualifierInfo`.

**返回**

- the ASN.1 DER encoded bytes of the `qualifier` field. Note that a copy is returned, so the data is cloned each time this method is called.
