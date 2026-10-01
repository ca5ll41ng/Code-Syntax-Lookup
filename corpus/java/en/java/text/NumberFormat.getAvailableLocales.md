---
id: "java-en-function-numberformat-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getAvailableLocales"
signature: "public static Locale[] getAvailableLocales()"
title: "NumberFormat.getAvailableLocales"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getAvailableLocales

```java
public static Locale[] getAvailableLocales()
```

Returns an array of all locales for which the
 `get*Instance` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `java.text.spi.NumberFormatProvider NumberFormatProvider` implementations.
 At a minimum, the returned array must contain a `Locale` instance equal to
 `ROOT Locale.ROOT` and a `Locale` instance equal to
 `US Locale.US`.

**返回**

- An array of locales for which localized `NumberFormat` instances are available.
