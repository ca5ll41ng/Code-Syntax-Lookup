---
id: "java-en-function-decimalstyle-withdecimalseparator"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.withDecimalSeparator"
signature: "public DecimalStyle withDecimalSeparator(char decimalSeparator)"
title: "DecimalStyle.withDecimalSeparator"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.withDecimalSeparator

```java
public DecimalStyle withDecimalSeparator(char decimalSeparator)
```

Returns a copy of the info with a new character that represents the decimal point.
 

 The character used to represent a decimal point may vary by culture.
 This method specifies the character to use.

**参数**

- **decimalSeparator** — the character for the decimal point

**返回**

- a copy with a new character that represents the decimal point, not null
