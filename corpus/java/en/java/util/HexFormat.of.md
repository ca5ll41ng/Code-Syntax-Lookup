---
id: "java-en-function-hexformat-of"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.of"
signature: "public static HexFormat of()"
title: "HexFormat.of"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.of

```java
public static HexFormat of()
```

Returns a hexadecimal formatter with no delimiter and lowercase characters.
 The delimiter, prefix, and suffix are empty.
 The methods `withDelimiter(String) withDelimiter`,
 `withUpperCase() withUpperCase`, `withLowerCase() withLowerCase`,
 `withPrefix(String) withPrefix`, and `withSuffix(String) withSuffix`
 return copies of formatters with new parameters.

**返回**

- a hexadecimal formatter with no delimiter and lowercase characters
