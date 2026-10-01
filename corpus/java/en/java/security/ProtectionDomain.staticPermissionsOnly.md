---
id: "java-en-function-protectiondomain-staticpermissionsonly"
language: "java"
lang: "en"
category: "function"
name: "ProtectionDomain.staticPermissionsOnly"
signature: "public final boolean staticPermissionsOnly()"
title: "ProtectionDomain.staticPermissionsOnly"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/ProtectionDomain.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionDomain.staticPermissionsOnly

```java
public final boolean staticPermissionsOnly()
```

Returns `true` if this domain contains only static permissions
 and does not check the current `Policy`.

 no longer supported. The `getPolicy current policy`
 is always a `Policy` object that grants no permissions.

**返回**

- `true` if this domain contains only static permissions.

> *Since 9*
