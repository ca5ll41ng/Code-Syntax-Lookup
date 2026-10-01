---
id: "java-en-function-pkixparameters-setpolicymappinginhibited"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setPolicyMappingInhibited"
signature: "public void setPolicyMappingInhibited(boolean val)"
title: "PKIXParameters.setPolicyMappingInhibited"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setPolicyMappingInhibited

```java
public void setPolicyMappingInhibited(boolean val)
```

Sets the PolicyMappingInhibited flag. If this flag is true, policy
 mapping is inhibited. By default, policy mapping is not inhibited (the
 flag is false).

**参数**

- **val** — `true` if policy mapping is to be inhibited, `false` otherwise
