---
id: "java-en-function-privatecredentialpermission-equals"
language: "java"
lang: "en"
category: "function"
name: "PrivateCredentialPermission.equals"
signature: "public boolean equals(Object obj)"
title: "PrivateCredentialPermission.equals"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission.equals

```java
public boolean equals(Object obj)
```

Checks two `PrivateCredentialPermission` objects for
 equality.  Checks that `obj` is a
 `PrivateCredentialPermission`,
 and has the same credential class as this object,
 as well as the same Principals as this object.
 The order of the Principals in the respective Permission's
 target names is not relevant.

**参数**

- **obj** — the object we are testing for equality with this object.

**返回**

- true if obj is a `PrivateCredentialPermission`, has the same credential class as this object, and has the same Principals as this object.
