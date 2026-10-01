---
id: "java-en-function-version-parse"
language: "java"
lang: "en"
category: "function"
name: "Version.parse"
signature: "public static Version parse(String v)"
title: "Version.parse"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version.parse

```java
public static Version parse(String v)
```

Parses the given string as a version string.

**参数**

- **v** — The string to parse

**返回**

- The resulting `Version`

**异常**

- **IllegalArgumentException** — If `v` is `null`, an empty string, or cannot be parsed as a version string
