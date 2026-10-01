---
id: "java-en-function-dateformatsymbols-dateformatsymbols"
language: "java"
lang: "en"
category: "function"
name: "DateFormatSymbols.DateFormatSymbols"
signature: "public DateFormatSymbols()"
title: "DateFormatSymbols.DateFormatSymbols"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormatSymbols.DateFormatSymbols

```java
public DateFormatSymbols()
```

Construct a DateFormatSymbols object by loading format data from
 resources for the default `FORMAT FORMAT`
 locale. This constructor can only
 construct instances for the locales supported by the Java
 runtime environment, not for those supported by installed
 `java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider`
 implementations. For full locale coverage, use the
 `getInstance(Locale) getInstance` method.
 

This is equivalent to calling
 `DateFormatSymbols(Locale)
     DateFormatSymbols`.

**异常**

- **java.util.MissingResourceException** — if the resources for the default locale cannot be found or cannot be loaded.

**参见**

- #getInstance()
- java.util.Locale#getDefault(java.util.Locale.Category)
- java.util.Locale.Category#FORMAT
