---
id: "java-en-function-hexformat-tolowhexdigit"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.toLowHexDigit"
signature: "public char toLowHexDigit(int value)"
title: "HexFormat.toLowHexDigit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.toLowHexDigit

```java
public char toLowHexDigit(int value)
```

Returns the hexadecimal character for the low 4 bits of the value considering it to be a byte.
 If the parameter `isUpperCase` is `true` the
 character returned for values `10-15` is uppercase `"A-F"`,
 otherwise the character returned is lowercase `"a-f"`.
 The values in the range `0-9` are returned as `"0-9"`.

**参数**

- **value** — a value, only the low 4 bits `0-3` of the value are used

**返回**

- the hexadecimal character for the low 4 bits `0-3` of the value
