---
id: "java-en-function-lookup-module"
language: "java"
lang: "en"
category: "function"
name: "Lookup.MODULE"
signature: "public static final int MODULE = PACKAGE << 1"
title: "Lookup.MODULE"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.MODULE

```java
public static final int MODULE = PACKAGE << 1
```

A single-bit mask representing `module` access,
  which may contribute to the result of `lookupModes lookupModes`.
  The value is `0x10`, which does not correspond meaningfully to
  any particular `java.lang.reflect.Modifier modifier bit`.
  In conjunction with the `PUBLIC` modifier bit, a `Lookup`
  with this lookup mode can access all public types in the module of the
  lookup class and public types in packages exported by other modules
  to the module of the lookup class.
  

  If this lookup mode is set, the `previousLookupClass()
  previous lookup class` is always `null`.

> *Since 9*
