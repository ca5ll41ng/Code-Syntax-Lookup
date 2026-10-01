---
id: "java-en-function-lookup-hasfullprivilegeaccess"
language: "java"
lang: "en"
category: "function"
name: "Lookup.hasFullPrivilegeAccess"
signature: "public boolean hasFullPrivilegeAccess()"
title: "Lookup.hasFullPrivilegeAccess"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.hasFullPrivilegeAccess

```java
public boolean hasFullPrivilegeAccess()
```

Returns `true` if this lookup has full privilege access,
 i.e. `PRIVATE` and `MODULE` access.
 A `Lookup` object must have full privilege access in order to
 access all members that are allowed to the
 `lookupClass() lookup class`.

**返回**

- `true` if this lookup has full privilege access.

**参见**

- private and module access

> *Since 14*
