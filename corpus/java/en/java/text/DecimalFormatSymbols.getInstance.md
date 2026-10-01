---
id: "java-en-function-decimalformatsymbols-getinstance"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.getInstance"
signature: "public static final DecimalFormatSymbols getInstance()"
title: "DecimalFormatSymbols.getInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.getInstance

```java
public static final DecimalFormatSymbols getInstance()
```

Gets the `DecimalFormatSymbols` instance for the default
 locale.  This method provides access to `DecimalFormatSymbols`
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `java.text.spi.DecimalFormatSymbolsProvider
 DecimalFormatSymbolsProvider` implementations.
 

This is equivalent to calling
 `getInstance(Locale)
     getInstance`.

**返回**

- a `DecimalFormatSymbols` instance.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT

> *Since 1.6*
