---
id: "java-en-function-policy-getparameters"
language: "java"
lang: "en"
category: "function"
name: "Policy.getParameters"
signature: "public Policy.Parameters getParameters()"
title: "Policy.getParameters"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getParameters

```java
public Policy.Parameters getParameters()
```

Return `Policy` parameters.

 

 This `Policy` instance will only have parameters if it
 was obtained via a call to `Policy.getInstance`.
 Otherwise this method returns `null`.

**返回**

- `Policy` parameters, or `null`.

> *Since 1.6*
