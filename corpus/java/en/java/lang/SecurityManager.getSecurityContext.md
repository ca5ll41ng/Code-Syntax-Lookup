---
id: "java-en-function-securitymanager-getsecuritycontext"
language: "java"
lang: "en"
category: "function"
name: "SecurityManager.getSecurityContext"
signature: "public Object getSecurityContext()"
title: "SecurityManager.getSecurityContext"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/SecurityManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecurityManager.getSecurityContext

```java
public Object getSecurityContext()
```

Returns an `AccessControlContext` where the `checkPermission`
 method always throws an `AccessControlException` and the
 `getDomainCombiner` method always returns `null`.

       calling context, which included the current thread's access
       control context and any limited privilege scope. This method has
       been changed to always return an innocuous
       `AccessControlContext` that fails all permission checks.
       `SecurityManager The Security Manager` is no longer
       supported. There is no replacement for the Security Manager or
       this method.

**返回**

- an `AccessControlContext` as specified above

**参见**

- java.security.AccessControlContext AccessControlContext
