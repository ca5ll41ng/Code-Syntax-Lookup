---
id: "java-en-function-decimalstyle-withpositivesign"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.withPositiveSign"
signature: "public DecimalStyle withPositiveSign(char positiveSign)"
title: "DecimalStyle.withPositiveSign"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.withPositiveSign

```java
public DecimalStyle withPositiveSign(char positiveSign)
```

Returns a copy of the info with a new character that represents the positive sign.
 

 The character used to represent a positive number may vary by culture.
 This method specifies the character to use.

**参数**

- **positiveSign** — the character for the positive sign

**返回**

- a copy with a new character that represents the positive sign, not null
