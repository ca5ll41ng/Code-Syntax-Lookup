---
id: "java-en-function-policynode-getpolicyqualifiers"
language: "java"
lang: "en"
category: "function"
name: "PolicyNode.getPolicyQualifiers"
signature: "Set<? extends PolicyQualifierInfo> getPolicyQualifiers()"
title: "PolicyNode.getPolicyQualifiers"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PolicyNode.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicyNode.getPolicyQualifiers

```java
Set<? extends PolicyQualifierInfo> getPolicyQualifiers()
```

Returns the set of policy qualifiers associated with the
 valid policy represented by this node.

**返回**

- an immutable `Set` of `PolicyQualifierInfo`s. For the root node, this is always an empty `Set`.
