---
id: "java-en-function-policyqualifierinfo-getpolicyqualifierid"
language: "java"
lang: "en"
category: "function"
name: "PolicyQualifierInfo.getPolicyQualifierId"
signature: "public final String getPolicyQualifierId()"
title: "PolicyQualifierInfo.getPolicyQualifierId"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyQualifierInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyQualifierInfo.getPolicyQualifierId

```java
public final String getPolicyQualifierId()
```

Returns the `policyQualifierId` field of this
 `PolicyQualifierInfo`. The `policyQualifierId`
 is an Object Identifier (OID) represented by a set of nonnegative
 integers separated by periods.

**返回**

- the OID (never `null`)
