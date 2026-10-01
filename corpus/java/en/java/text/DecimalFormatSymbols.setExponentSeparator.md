---
id: "java-en-function-decimalformatsymbols-setexponentseparator"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.setExponentSeparator"
signature: "public void setExponentSeparator(String exp)"
title: "DecimalFormatSymbols.setExponentSeparator"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.setExponentSeparator

```java
public void setExponentSeparator(String exp)
```

Sets the string used to separate the mantissa from the exponent.
 Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.

**参数**

- **exp** — the exponent separator string

**异常**

- **NullPointerException** — if `exp` is null

**参见**

- #getExponentSeparator()

> *Since 1.6*
