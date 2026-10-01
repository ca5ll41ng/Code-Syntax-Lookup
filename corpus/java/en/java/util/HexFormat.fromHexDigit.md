---
id: "java-en-function-hexformat-fromhexdigit"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.fromHexDigit"
signature: "public static int fromHexDigit(int ch)"
title: "HexFormat.fromHexDigit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.fromHexDigit

```java
public static int fromHexDigit(int ch)
```

Returns the value for the hexadecimal character or codepoint.
 The value is:
 
 
- `(ch - '0')` for `'0'` through `'9'` inclusive,
 
- `(ch - 'A' + 10)` for `'A'` through `'F'` inclusive, and
 
- `(ch - 'a' + 10)` for `'a'` through `'f'` inclusive.

**参数**

- **ch** — a character or codepoint

**返回**

- the value `0-15`

**异常**

- **NumberFormatException** — if the codepoint is not a hexadecimal character
