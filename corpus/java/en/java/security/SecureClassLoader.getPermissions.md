---
id: "java-en-function-secureclassloader-getpermissions"
language: "java"
lang: "en"
category: "function"
name: "SecureClassLoader.getPermissions"
signature: "protected PermissionCollection getPermissions(CodeSource codesource)"
title: "SecureClassLoader.getPermissions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureClassLoader.getPermissions

```java
protected PermissionCollection getPermissions(CodeSource codesource)
```

Returns the permissions for the given CodeSource object.
 

 This method is invoked by the defineClass method which takes
 a CodeSource as an argument when it is constructing the
 ProtectionDomain for the class being defined.

**参数**

- **codesource** — the codesource.

**返回**

- the permissions for the codesource.
