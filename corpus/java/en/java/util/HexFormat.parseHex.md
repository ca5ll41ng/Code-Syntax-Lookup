---
id: "java-en-function-hexformat-parsehex"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.parseHex"
signature: "public byte[] parseHex(CharSequence string)"
title: "HexFormat.parseHex"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.parseHex

```java
public byte[] parseHex(CharSequence string)
```

Returns a byte array containing hexadecimal values parsed from the string.

 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.
 The delimiters, prefixes, and suffixes strings must be present; they may be empty strings.
 A valid string consists only of the above format.

**参数**

- **string** — a string containing the byte values with prefix, hexadecimal digits, suffix, and delimiters

**返回**

- a byte array with the values parsed from the string

**异常**

- **IllegalArgumentException** — if the prefix or suffix is not present for each byte value, the byte values are not hexadecimal characters, or if the delimiter is not present after all but the last byte value
