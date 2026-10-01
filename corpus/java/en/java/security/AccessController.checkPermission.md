---
id: "java-en-function-accesscontroller-checkpermission"
language: "java"
lang: "en"
category: "function"
name: "AccessController.checkPermission"
signature: "public static void checkPermission(Permission perm) throws AccessControlException"
title: "AccessController.checkPermission"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessController.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessController.checkPermission

```java
public static void checkPermission(Permission perm) throws AccessControlException
```

Throws `AccessControlException`.

       indicated by the specified permission should be allowed or denied,
       based on the current `AccessControlContext` and security
       policy. This method has been changed to always throw
       `AccessControlException`. This method was only useful in
       conjunction with `SecurityManager the Security Manager`,
       which is no longer supported. There is no replacement for the
       Security Manager or this method.

**参数**

- **perm** — ignored

**异常**

- **AccessControlException** — always
