---
id: "java-en-function-pkixparameters-setexplicitpolicyrequired"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setExplicitPolicyRequired"
signature: "public void setExplicitPolicyRequired(boolean val)"
title: "PKIXParameters.setExplicitPolicyRequired"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setExplicitPolicyRequired

```java
public void setExplicitPolicyRequired(boolean val)
```

Sets the ExplicitPolicyRequired flag. If this flag is true, an
 acceptable policy needs to be explicitly identified in every certificate.
 By default, the ExplicitPolicyRequired flag is false.

**参数**

- **val** — `true` if explicit policy is to be required, `false` otherwise
