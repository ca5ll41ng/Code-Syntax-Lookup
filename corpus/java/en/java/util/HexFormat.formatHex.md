---
id: "java-en-function-hexformat-formathex"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.formatHex"
signature: "public String formatHex(byte[] bytes)"
title: "HexFormat.formatHex"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.formatHex

```java
public String formatHex(byte[] bytes)
```

Returns a hexadecimal string formatted from a byte array.
 Each byte value is formatted as the prefix, two hexadecimal characters
 `isUpperCase selected from` uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.

 The behavior is equivalent to
 `formatHex`.

**参数**

- **bytes** — a non-null array of bytes

**返回**

- a string hexadecimal formatting of the byte array
