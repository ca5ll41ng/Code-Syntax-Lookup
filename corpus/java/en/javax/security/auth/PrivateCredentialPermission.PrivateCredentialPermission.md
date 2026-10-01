---
id: "java-en-function-privatecredentialpermission-privatecredentialpermission"
language: "java"
lang: "en"
category: "function"
name: "PrivateCredentialPermission.PrivateCredentialPermission"
signature: "public PrivateCredentialPermission(String name, String actions)"
title: "PrivateCredentialPermission.PrivateCredentialPermission"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission.PrivateCredentialPermission

```java
public PrivateCredentialPermission(String name, String actions)
```

Creates a new `PrivateCredentialPermission`
 with the specified `name`.  The `name`
 specifies both a Credential class and a `Principal` Set.

**参数**

- **name** — the name specifying the Credential class and `Principal` Set.
- **actions** — the actions specifying that the Credential can be read.

**异常**

- **IllegalArgumentException** — if `name` does not conform to the correct syntax or if `actions` is not "read".
