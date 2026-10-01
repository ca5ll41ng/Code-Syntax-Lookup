---
id: "java-en-function-policy-implies"
language: "java"
lang: "en"
category: "function"
name: "Policy.implies"
signature: "public boolean implies(ProtectionDomain domain, Permission permission)"
title: "Policy.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.implies

```java
public boolean implies(ProtectionDomain domain, Permission permission)
```

Evaluates the permissions granted to the ProtectionDomain and tests
 whether the permission is granted.

 

 The default implementation of this method ignores the
 ProtectionDomain and Permission parameters and always returns false.

**参数**

- **domain** — ignored
- **permission** — ignored

**返回**

- `false` always

**参见**

- java.security.ProtectionDomain

> *Since 1.4*
