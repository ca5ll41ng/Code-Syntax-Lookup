---
id: "java-en-function-decimalstyle-withzerodigit"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.withZeroDigit"
signature: "public DecimalStyle withZeroDigit(char zeroDigit)"
title: "DecimalStyle.withZeroDigit"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.withZeroDigit

```java
public DecimalStyle withZeroDigit(char zeroDigit)
```

Returns a copy of the info with a new character that represents zero.
 

 The character used to represent digits may vary by culture.
 This method specifies the zero character to use, which implies the characters for one to nine.

**参数**

- **zeroDigit** — the character for zero

**返回**

- a copy with a new character that represents zero, not null
