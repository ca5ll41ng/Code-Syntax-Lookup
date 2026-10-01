---
id: "java-en-function-unresolvedpermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermission.getActions"
signature: "public String getActions()"
title: "UnresolvedPermission.getActions"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission.getActions

```java
public String getActions()
```

Returns the canonical string representation of the actions,
 which currently is the empty string "", since there are no actions for
 an `UnresolvedPermission`. That is, the actions for the
 permission that will be created when this `UnresolvedPermission`
 is resolved may be non-null, but an `UnresolvedPermission`
 itself is never considered to have any actions.

**返回**

- the empty string "".
