---
id: "java-en-function-pkixparameters-isexplicitpolicyrequired"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.isExplicitPolicyRequired"
signature: "public boolean isExplicitPolicyRequired()"
title: "PKIXParameters.isExplicitPolicyRequired"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.isExplicitPolicyRequired

```java
public boolean isExplicitPolicyRequired()
```

Checks if explicit policy is required. If this flag is true, an
 acceptable policy needs to be explicitly identified in every certificate.
 By default, the ExplicitPolicyRequired flag is false.

**返回**

- `true` if explicit policy is required, `false` otherwise
