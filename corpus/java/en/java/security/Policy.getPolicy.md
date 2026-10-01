---
id: "java-en-function-policy-getpolicy"
language: "java"
lang: "en"
category: "function"
name: "Policy.getPolicy"
signature: "public static Policy getPolicy()"
title: "Policy.getPolicy"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getPolicy

```java
public static Policy getPolicy()
```

Returns a `Policy` object that grants no permissions.
 Specifically:

 
     
-  The `getParameters` method returns `null`. 
     
-  The `getPermissions(CodeSource)` and
     `getPermissions(ProtectionDomain)` methods return a read-only
     empty `PermissionCollection`. 
     
-  The `implies` method always returns `false`. 
 

    object, or if no `Policy` object had been installed, a default
    `Policy` implementation. Installing a system-wide `Policy`
    object is no longer supported. This method always returns a
    default `Policy` object that grants no permissions. A
    `Policy` object was only useful in conjunction with
    `SecurityManager the Security Manager`, which is no
    longer supported. There is no replacement for this method.

**返回**

- a `Policy` object that grants no permissions

**参见**

- #setPolicy(java.security.Policy)
