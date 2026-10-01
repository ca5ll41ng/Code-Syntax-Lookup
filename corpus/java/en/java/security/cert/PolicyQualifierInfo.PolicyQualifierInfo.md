---
id: "java-en-function-policyqualifierinfo-policyqualifierinfo"
language: "java"
lang: "en"
category: "function"
name: "PolicyQualifierInfo.PolicyQualifierInfo"
signature: "public PolicyQualifierInfo(byte[] encoded) throws IOException"
title: "PolicyQualifierInfo.PolicyQualifierInfo"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyQualifierInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyQualifierInfo.PolicyQualifierInfo

```java
public PolicyQualifierInfo(byte[] encoded) throws IOException
```

Creates an instance of `PolicyQualifierInfo` from the
 encoded bytes. The encoded byte array is copied on construction.

**参数**

- **encoded** — a byte array containing the qualifier in DER encoding

**异常**

- **IOException** — thrown if the byte array does not represent a valid and parsable policy qualifier
