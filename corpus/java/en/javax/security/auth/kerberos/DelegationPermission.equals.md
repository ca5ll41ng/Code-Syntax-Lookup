---
id: "java-en-function-delegationpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "DelegationPermission.equals"
signature: "public boolean equals(Object obj)"
title: "DelegationPermission.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/DelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegationPermission.equals

```java
public boolean equals(Object obj)
```

Checks two DelegationPermission objects for equality.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- true if `obj` is a DelegationPermission, and has the same subordinate and service principal as this DelegationPermission object.
