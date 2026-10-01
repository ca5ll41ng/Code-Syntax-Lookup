---
id: "java-en-function-hexformat-fromhexdigitstolong"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.fromHexDigitsToLong"
signature: "public static long fromHexDigitsToLong(CharSequence string)"
title: "HexFormat.fromHexDigitsToLong"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.fromHexDigitsToLong

```java
public static long fromHexDigitsToLong(CharSequence string)
```

Returns the long value parsed from a string of up to sixteen hexadecimal characters.
 The hexadecimal characters are parsed from most significant to least significant
 using `fromHexDigit` to form an unsigned value.
 The value is zero extended to 64 bits and is returned as a `long`.

 `parseLong` and
 `parseUnsignedLong`
 are similar but allow all Unicode hexadecimal digits defined by
 `digit`.
 `HexFormat` uses only hexadecimal characters
 `"0-9"`, `"A-F"` and `"a-f"`.
 Signed hexadecimal strings can be parsed with `parseLong`.

**参数**

- **string** — a CharSequence containing up to sixteen hexadecimal characters

**返回**

- the value parsed from the string

**异常**

- **IllegalArgumentException** — if the string length is greater than sixteen (16) or if any of the characters is not a hexadecimal character
