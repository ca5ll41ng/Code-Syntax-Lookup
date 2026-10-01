---
id: "java-en-function-decimalformatsymbols-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "DecimalFormatSymbols.getAvailableLocales"
signature: "public static Locale[] getAvailableLocales()"
title: "DecimalFormatSymbols.getAvailableLocales"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DecimalFormatSymbols.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalFormatSymbols.getAvailableLocales

```java
public static Locale[] getAvailableLocales()
```

Returns an array of all locales for which the
 `getInstance` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider`
 implementations. At a minimum, the returned array must contain a
 `Locale` instance equal to `ROOT Locale.ROOT` and
 a `Locale` instance equal to `US Locale.US`.

**返回**

- an array of locales for which localized `DecimalFormatSymbols` instances are available.

> *Since 1.6*
