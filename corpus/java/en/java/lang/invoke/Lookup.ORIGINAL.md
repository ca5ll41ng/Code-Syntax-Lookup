---
id: "java-en-function-lookup-original"
language: "java"
lang: "en"
category: "function"
name: "Lookup.ORIGINAL"
signature: "public static final int ORIGINAL = PACKAGE << 3"
title: "Lookup.ORIGINAL"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.ORIGINAL

```java
public static final int ORIGINAL = PACKAGE << 3
```

A single-bit mask representing `original` access
  which may contribute to the result of `lookupModes lookupModes`.
  The value is `0x40`, which does not correspond meaningfully to
  any particular `java.lang.reflect.Modifier modifier bit`.

  

  If this lookup mode is set, the `Lookup` object must be
  created by the original lookup class by calling
  `lookup` method or by a bootstrap method
  invoked by the VM.  The `Lookup` object with this lookup
  mode has `hasFullPrivilegeAccess() full privilege access`.

> *Since 16*
