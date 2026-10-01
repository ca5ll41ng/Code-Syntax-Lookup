---
id: "java-en-function-numericposition-getcurrency"
language: "java"
lang: "en"
category: "function"
name: "NumericPosition.getCurrency"
signature: "public Currency getCurrency()"
title: "NumericPosition.getCurrency"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericPosition.getCurrency

```java
public Currency getCurrency()
```

Gets the currency used by this decimal format when formatting
 currency values.
 The currency is obtained by calling
 `getCurrency DecimalFormatSymbols.getCurrency`
 on this number format's symbols.

**返回**

- the currency used by this decimal format, or `null`

> *Since 1.4*
