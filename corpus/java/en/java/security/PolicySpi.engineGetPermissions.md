---
id: "java-en-function-policyspi-enginegetpermissions"
language: "java"
lang: "en"
category: "function"
name: "PolicySpi.engineGetPermissions"
signature: "protected PermissionCollection engineGetPermissions (CodeSource codesource)"
title: "PolicySpi.engineGetPermissions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PolicySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PolicySpi.engineGetPermissions

```java
protected PermissionCollection engineGetPermissions (CodeSource codesource)
```

Return a PermissionCollection object containing the set of
 permissions granted to the specified CodeSource.

 

 The default implementation of this method returns
 Policy.UNSUPPORTED_EMPTY_COLLECTION object.

**参数**

- **codesource** — the CodeSource to which the returned PermissionCollection has been granted

**返回**

- a set of permissions granted to the specified CodeSource
