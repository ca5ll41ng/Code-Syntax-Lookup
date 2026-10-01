---
id: "java-en-function-securitypermission-securitypermission"
language: "java"
lang: "en"
category: "function"
name: "SecurityPermission.SecurityPermission"
signature: "public SecurityPermission(String name)"
title: "SecurityPermission.SecurityPermission"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecurityPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecurityPermission.SecurityPermission

```java
public SecurityPermission(String name)
```

Creates a new `SecurityPermission` with the specified name.
 The name is the symbolic name of the `SecurityPermission`.
 An asterisk may appear at the end of the name, following a ".",
 or by itself, to signify a wildcard match.

**参数**

- **name** — the name of the `SecurityPermission`

**异常**

- **NullPointerException** — if `name` is `null`.
- **IllegalArgumentException** — if `name` is empty.
