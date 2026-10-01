---
id: "java-en-function-pkixparameters-setanypolicyinhibited"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setAnyPolicyInhibited"
signature: "public void setAnyPolicyInhibited(boolean val)"
title: "PKIXParameters.setAnyPolicyInhibited"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setAnyPolicyInhibited

```java
public void setAnyPolicyInhibited(boolean val)
```

Sets state to determine if the any policy OID should be processed
 if it is included in a certificate. By default, the any policy OID
 is not inhibited (`isAnyPolicyInhibited isAnyPolicyInhibited`
 returns `false`).

**参数**

- **val** — `true` if the any policy OID is to be inhibited, `false` otherwise
