---
id: "java-en-function-lookup-hasprivateaccess"
language: "java"
lang: "en"
category: "function"
name: "Lookup.hasPrivateAccess"
signature: "public boolean hasPrivateAccess()"
title: "Lookup.hasPrivateAccess"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.hasPrivateAccess

```java
public boolean hasPrivateAccess()
```

Returns `true` if this lookup has `PRIVATE` and `MODULE` access.

**返回**

- `true` if this lookup has `PRIVATE` and `MODULE` access.

> *Since 9*

> **⚠ Deprecated** — This method was originally designed to test `PRIVATE` access that implies full privilege access but `MODULE` access has since become independent of `PRIVATE` access.  It is recommended to call `hasFullPrivilegeAccess` instead.
