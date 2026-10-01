---
id: "java-en-function-lookup-public"
language: "java"
lang: "en"
category: "function"
name: "Lookup.PUBLIC"
signature: "public static final int PUBLIC = Modifier.PUBLIC"
title: "Lookup.PUBLIC"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.PUBLIC

```java
public static final int PUBLIC = Modifier.PUBLIC
```

A single-bit mask representing `public` access,
  which may contribute to the result of `lookupModes lookupModes`.
  The value, `0x01`, happens to be the same as the value of the
  `public` `PUBLIC modifier bit`.
  

  A `Lookup` with this lookup mode performs cross-module access check
  with respect to the `lookupClass() lookup class` and
  `previousLookupClass() previous lookup class` if present.
