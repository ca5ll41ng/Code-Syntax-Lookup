---
id: "java-en-function-hexformat-tohighhexdigit"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.toHighHexDigit"
signature: "public char toHighHexDigit(int value)"
title: "HexFormat.toHighHexDigit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.toHighHexDigit

```java
public char toHighHexDigit(int value)
```

Returns the hexadecimal character for the high 4 bits of the value considering it to be a byte.
 If the parameter `isUpperCase` is `true` the
 character returned for values `10-15` is uppercase `"A-F"`,
 otherwise the character returned is lowercase `"a-f"`.
 The values in the range `0-9` are returned as `"0-9"`.

**参数**

- **value** — a value, only bits `4-7` of the value are used

**返回**

- the hexadecimal character for the bits `4-7` of the value
