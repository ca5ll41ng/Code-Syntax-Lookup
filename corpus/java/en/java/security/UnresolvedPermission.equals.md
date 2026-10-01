---
id: "java-en-function-unresolvedpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.equals"
signature: "public boolean equals(Object obj)"
title: "UnresolvedPermission.equals"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.equals

```java
public boolean equals(Object obj)
```

Checks two `UnresolvedPermission` objects for equality.
 Checks that `obj` is an `UnresolvedPermission`, and has
 the same type (class) name, permission name, actions, and
 certificates as this object.

 

 To determine certificate equality, this method only compares
 actual signer certificates.  Supporting certificate chains
 are not taken into consideration by this method.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- true if `obj` is an `UnresolvedPermission`, and has the same type (class) name, permission name, actions, and certificates as this object.
