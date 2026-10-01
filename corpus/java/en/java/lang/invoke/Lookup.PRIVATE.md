---
id: "java-en-function-lookup-private"
language: "java"
lang: "en"
category: "function"
name: "Lookup.PRIVATE"
signature: "public static final int PRIVATE = Modifier.PRIVATE"
title: "Lookup.PRIVATE"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.PRIVATE

```java
public static final int PRIVATE = Modifier.PRIVATE
```

A single-bit mask representing `private` access,
  which may contribute to the result of `lookupModes lookupModes`.
  The value, `0x02`, happens to be the same as the value of the
  `private` `PRIVATE modifier bit`.
