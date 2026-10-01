---
id: "java-en-function-hexformat-ofdelimiter"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.ofDelimiter"
signature: "public static HexFormat ofDelimiter(String delimiter)"
title: "HexFormat.ofDelimiter"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.ofDelimiter

```java
public static HexFormat ofDelimiter(String delimiter)
```

Returns a hexadecimal formatter with the delimiter and lowercase characters.
 The prefix and suffix are empty.
 The methods `withDelimiter(String) withDelimiter`,
 `withUpperCase() withUpperCase`, `withLowerCase() withLowerCase`,
 `withPrefix(String) withPrefix`, and `withSuffix(String) withSuffix`
 return copies of formatters with new parameters.

**参数**

- **delimiter** — a delimiter, non-null, may be empty

**返回**

- a `HexFormat` with the delimiter and lowercase characters
