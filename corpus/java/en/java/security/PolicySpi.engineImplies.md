---
id: "java-en-function-policyspi-engineimplies"
language: "java"
lang: "en"
category: "function"
name: "PolicySpi.engineImplies"
signature: "protected abstract boolean engineImplies (ProtectionDomain domain, Permission permission)"
title: "PolicySpi.engineImplies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PolicySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicySpi.engineImplies

```java
protected abstract boolean engineImplies (ProtectionDomain domain, Permission permission)
```

Check whether the policy has granted a Permission to a ProtectionDomain.

**参数**

- **domain** — the ProtectionDomain to check
- **permission** — check whether this permission is granted to the specified domain

**返回**

- boolean `true` if the permission is granted to the domain
