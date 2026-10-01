---
id: "java-en-function-authpermission-authpermission"
language: "java"
lang: "en"
category: "function"
name: "AuthPermission.AuthPermission"
signature: "public AuthPermission(String name)"
title: "AuthPermission.AuthPermission"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/AuthPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthPermission.AuthPermission

```java
public AuthPermission(String name)
```

Creates a new AuthPermission with the specified name.
 The name is the symbolic name of the AuthPermission.

**参数**

- **name** — the name of the AuthPermission

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
