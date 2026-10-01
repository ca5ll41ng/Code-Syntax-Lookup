---
id: "java-en-function-pkixbuilderparameters-getmaxpathlength"
language: "java"
lang: "en"
category: "function"
name: "PKIXBuilderParameters.getMaxPathLength"
signature: "public int getMaxPathLength()"
title: "PKIXBuilderParameters.getMaxPathLength"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXBuilderParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXBuilderParameters.getMaxPathLength

```java
public int getMaxPathLength()
```

Returns the value of the maximum number of intermediate non-self-issued
 certificates that may exist in a certification path. See
 the `setMaxPathLength` method for more details.

**返回**

- the maximum number of non-self-issued intermediate certificates that may exist in a certification path, or -1 if there is no limit

**参见**

- #setMaxPathLength
