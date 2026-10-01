---
id: "java-en-function-delegationpermission-delegationpermission"
language: "java"
lang: "en"
category: "function"
name: "DelegationPermission.DelegationPermission"
signature: "public DelegationPermission(String principals)"
title: "DelegationPermission.DelegationPermission"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/DelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegationPermission.DelegationPermission

```java
public DelegationPermission(String principals)
```

Create a new `DelegationPermission`
 with the specified subordinate and target principals.

**参数**

- **principals** — the name of the subordinate and target principals

**异常**

- **NullPointerException** — if `principals` is `null`.
- **IllegalArgumentException** — if `principals` is empty, or does not contain a pair of principals, or is improperly quoted
