---
id: "java-en-function-lookup-package"
language: "java"
lang: "en"
category: "function"
name: "Lookup.PACKAGE"
signature: "public static final int PACKAGE = Modifier.STATIC"
title: "Lookup.PACKAGE"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.PACKAGE

```java
public static final int PACKAGE = Modifier.STATIC
```

A single-bit mask representing `package` access (default access),
  which may contribute to the result of `lookupModes lookupModes`.
  The value is `0x08`, which does not correspond meaningfully to
  any particular `java.lang.reflect.Modifier modifier bit`.
