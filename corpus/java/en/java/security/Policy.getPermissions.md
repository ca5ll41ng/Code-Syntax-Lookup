---
id: "java-en-function-policy-getpermissions"
language: "java"
lang: "en"
category: "function"
name: "Policy.getPermissions"
signature: "public PermissionCollection getPermissions(CodeSource codesource)"
title: "Policy.getPermissions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getPermissions

```java
public PermissionCollection getPermissions(CodeSource codesource)
```

Return a PermissionCollection object containing the set of
 permissions granted to the specified CodeSource.

 

 The default implementation of this method ignores the
 CodeSource and returns Policy.UNSUPPORTED_EMPTY_COLLECTION.

**参数**

- **codesource** — ignored

**返回**

- a set of permissions granted to the specified CodeSource. If this operation is supported, the returned set of permissions must be a new mutable instance and it must support heterogeneous Permission types. If this operation is not supported, Policy.UNSUPPORTED_EMPTY_COLLECTION is returned.
