---
id: "java-en-function-decimalformatsymbols-decimalformatsymbols"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.DecimalFormatSymbols"
signature: "public DecimalFormatSymbols()"
title: "DecimalFormatSymbols.DecimalFormatSymbols"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.DecimalFormatSymbols

```java
public DecimalFormatSymbols()
```

Create a DecimalFormatSymbols object for the default
 `FORMAT FORMAT` locale.
 This constructor can only construct instances for the locales
 supported by the Java runtime environment, not for those
 supported by installed
 `java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider`
 implementations. For full locale coverage, use the
 `getInstance(Locale) getInstance` method.
 

This is equivalent to calling
 `DecimalFormatSymbols(Locale)
     DecimalFormatSymbols`.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
