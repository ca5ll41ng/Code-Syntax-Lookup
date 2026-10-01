---
id: "java-en-function-protectiondomain-protectiondomain"
language: "java"
lang: "en"
category: "function"
name: "ProtectionDomain.ProtectionDomain"
signature: "public ProtectionDomain(CodeSource codesource, PermissionCollection permissions)"
title: "ProtectionDomain.ProtectionDomain"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/ProtectionDomain.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionDomain.ProtectionDomain

```java
public ProtectionDomain(CodeSource codesource, PermissionCollection permissions)
```

Creates a new `ProtectionDomain` with the given `CodeSource`
 and permissions. If permissions is not `null`, then
 `setReadOnly()` will be called on the passed in
 permissions.
 

 The permissions granted to this domain are static, i.e.
 invoking the `staticPermissionsOnly` method returns
 `true`.
 They contain only the ones passed to this constructor and
 the current policy will not be consulted.

 no longer supported. The `getPolicy current policy`
 is always a `Policy` object that grants no permissions.

**参数**

- **codesource** — the codesource associated with this domain
- **permissions** — the permissions granted to this domain
