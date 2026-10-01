---
id: "java-en-function-locale-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "Locale.getAvailableLocales"
signature: "public static Locale[] getAvailableLocales()"
title: "Locale.getAvailableLocales"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getAvailableLocales

```java
public static Locale[] getAvailableLocales()
```

{@return an array of available locales}

 The returned array represents the union of locales supported
 by the Java runtime environment and by deployed
 `java.util.spi.LocaleServiceProvider LocaleServiceProvider`
 implementations. At a minimum, the returned array must contain a
 `Locale` instance equal to `ROOT Locale.ROOT` and
 a `Locale` instance equal to `US Locale.US`.
