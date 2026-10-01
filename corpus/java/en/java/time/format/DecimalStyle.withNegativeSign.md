---
id: "java-en-function-decimalstyle-withnegativesign"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.withNegativeSign"
signature: "public DecimalStyle withNegativeSign(char negativeSign)"
title: "DecimalStyle.withNegativeSign"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.withNegativeSign

```java
public DecimalStyle withNegativeSign(char negativeSign)
```

Returns a copy of the info with a new character that represents the negative sign.
 

 The character used to represent a negative number may vary by culture.
 This method specifies the character to use.

**参数**

- **negativeSign** — the character for the negative sign

**返回**

- a copy with a new character that represents the negative sign, not null
