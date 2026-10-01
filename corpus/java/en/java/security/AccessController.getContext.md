---
id: "java-en-function-accesscontroller-getcontext"
language: "java"
lang: "en"
category: "function"
name: "AccessController.getContext"
signature: "public static AccessControlContext getContext()"
title: "AccessController.getContext"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AccessController.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessController.getContext

```java
public static AccessControlContext getContext()
```

Returns an `AccessControlContext` where the `checkPermission`
 method always throws an `AccessControlException` and the
 `getDomainCombiner` method always returns `null`.

       calling context, which included the current thread's access
       control context and any limited privilege scope. This method has
       been changed to always return an innocuous
       `AccessControlContext` that fails all permission checks.
       This method was only useful in conjunction with
       `SecurityManager the Security Manager`, which is no
       longer supported. There is no replacement for the Security Manager
       or this method.

**返回**

- an `AccessControlContext` as specified above

**参见**

- AccessControlContext
