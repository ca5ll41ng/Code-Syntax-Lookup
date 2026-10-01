---
id: "java-en-function-lookup-unconditional"
language: "java"
lang: "en"
category: "function"
name: "Lookup.UNCONDITIONAL"
signature: "public static final int UNCONDITIONAL = PACKAGE << 2"
title: "Lookup.UNCONDITIONAL"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.UNCONDITIONAL

```java
public static final int UNCONDITIONAL = PACKAGE << 2
```

A single-bit mask representing `unconditional` access
  which may contribute to the result of `lookupModes lookupModes`.
  The value is `0x20`, which does not correspond meaningfully to
  any particular `java.lang.reflect.Modifier modifier bit`.
  A `Lookup` with this lookup mode assumes `canRead(java.lang.Module) readability`.
  This lookup mode can access all public members of public types
  of all modules when the type is in a package that is `isExported(String) exported unconditionally`.

  

  If this lookup mode is set, the `previousLookupClass()
  previous lookup class` is always `null`.

**参见**

- #publicLookup()

> *Since 9*
