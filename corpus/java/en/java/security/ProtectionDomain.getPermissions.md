---
id: "java-en-function-protectiondomain-getpermissions"
language: "java"
lang: "en"
category: "function"
name: "ProtectionDomain.getPermissions"
signature: "public final PermissionCollection getPermissions()"
title: "ProtectionDomain.getPermissions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/ProtectionDomain.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionDomain.getPermissions

```java
public final PermissionCollection getPermissions()
```

Returns the static permissions granted to this domain.

**返回**

- the static set of permissions for this domain which may be `null`.

**参见**

- Policy#refresh
- Policy#getPermissions(ProtectionDomain)
