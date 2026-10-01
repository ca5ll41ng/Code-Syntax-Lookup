---
id: "java-en-function-dateformatsymbols-getinstance"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.getInstance"
signature: "public static final DateFormatSymbols getInstance()"
title: "DateFormatSymbols.getInstance"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.getInstance

```java
public static final DateFormatSymbols getInstance()
```

Gets the `DateFormatSymbols` instance for the default
 locale.  This method provides access to `DateFormatSymbols`
 instances for locales supported by the Java runtime itself as well
 as for those supported by installed
 `java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider`
 implementations.
 

This is equivalent to calling `getInstance(Locale)
     getInstance`.

**返回**

- a `DateFormatSymbols` instance.

**参见**

- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT

> *Since 1.6*
