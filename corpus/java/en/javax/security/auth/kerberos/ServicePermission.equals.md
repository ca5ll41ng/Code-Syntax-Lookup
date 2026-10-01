---
id: "java-en-function-servicepermission-equals"
language: "java"
lang: "en"
category: "function"
name: "ServicePermission.equals"
signature: "public boolean equals(Object obj)"
title: "ServicePermission.equals"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/ServicePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServicePermission.equals

```java
public boolean equals(Object obj)
```

Checks two ServicePermission objects for equality.

**参数**

- **obj** — the object to test for equality with this object.

**返回**

- true if `obj` is a ServicePermission, and has the same service principal, and actions as this ServicePermission object.
