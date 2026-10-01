---
id: "java-en-function-hexformat-tohexdigits"
language: "java"
lang: "en"
category: "function"
name: "HexFormat.toHexDigits"
signature: "public <A extends Appendable> A toHexDigits(A out, byte value)"
title: "HexFormat.toHexDigits"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat.toHexDigits

```java
public <A extends Appendable> A toHexDigits(A out, byte value)
```

Appends two hexadecimal characters for the byte value to the `Appendable`.
 Each nibble (4 bits) from most significant to least significant of the value
 is formatted as if by `toLowHexDigit`.
 The hexadecimal characters are appended in one or more calls to the
 `Appendable` methods. The delimiter, prefix and suffix are not used.

**参数**

- **The** — type of `Appendable`
- **out** — an `Appendable`, non-null
- **value** — a byte value

**返回**

- the `Appendable`

**异常**

- **UncheckedIOException** — if an I/O exception occurs appending to the output
