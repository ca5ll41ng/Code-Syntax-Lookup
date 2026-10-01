---
id: "java-en-function-hexformat-ishexdigit"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.isHexDigit"
signature: "public static boolean isHexDigit(int ch)"
title: "HexFormat.isHexDigit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.isHexDigit

```java
public static boolean isHexDigit(int ch)
```

Returns `true` if the character is a valid hexadecimal character or codepoint.
 The valid hexadecimal characters are:
 
 
- `'0' ('\u005Cu0030')` through `'9' ('\u005Cu0039')` inclusive,
 
- `'A' ('\u005Cu0041')` through `'F' ('\u005Cu0046')` inclusive, and
 
- `'a' ('\u005Cu0061')` through `'f' ('\u005Cu0066')` inclusive.

**参数**

- **ch** — a codepoint

**返回**

- `true` if the character is valid a hexadecimal character, otherwise `false`
