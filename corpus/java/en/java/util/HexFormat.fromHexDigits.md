---
id: "java-en-function-hexformat-fromhexdigits"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.fromHexDigits"
signature: "public static int fromHexDigits(CharSequence string)"
title: "HexFormat.fromHexDigits"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.fromHexDigits

```java
public static int fromHexDigits(CharSequence string)
```

Returns the `int` value parsed from a string of up to eight hexadecimal characters.
 The hexadecimal characters are parsed from most significant to least significant
 using `fromHexDigit` to form an unsigned value.
 The value is zero extended to 32 bits and is returned as an `int`.

 `parseInt` and
 `parseUnsignedInt`
 are similar but allow all Unicode hexadecimal digits defined by
 `digit`.
 `HexFormat` uses only hexadecimal characters
 `"0-9"`, `"A-F"` and `"a-f"`.
 Signed hexadecimal strings can be parsed with `parseInt`.

**参数**

- **string** — a CharSequence containing up to eight hexadecimal characters

**返回**

- the value parsed from the string

**异常**

- **IllegalArgumentException** — if the string length is greater than eight (8) or if any of the characters is not a hexadecimal character
