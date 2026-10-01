---
id: "java-en-function-pkixcertpathvalidatorresult-getpolicytree"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathValidatorResult.getPolicyTree"
signature: "public PolicyNode getPolicyTree()"
title: "PKIXCertPathValidatorResult.getPolicyTree"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathValidatorResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathValidatorResult.getPolicyTree

```java
public PolicyNode getPolicyTree()
```

Returns the root node of the valid policy tree resulting from the
 PKIX certification path validation algorithm. The
 `PolicyNode` object that is returned and any objects that
 it returns through public methods are immutable.

 

Most applications will not need to examine the valid policy tree.
 They can achieve their policy processing goals by setting the
 policy-related parameters in `PKIXParameters`. However, more
 sophisticated applications, especially those that process policy
 qualifiers, may need to traverse the valid policy tree using the
 `getParent PolicyNode.getParent` and
 `getChildren PolicyNode.getChildren` methods.

**返回**

- the root node of the valid policy tree, or `null` if there are no valid policies
