---
id: "java-en-function-locale-availablelocales"
language: "java"
lang: "en"
category: "function"
name: "Locale.availableLocales"
signature: "public static Stream<Locale> availableLocales()"
title: "Locale.availableLocales"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.availableLocales

```java
public static Stream<Locale> availableLocales()
```

{@return a stream of available locales}

 The returned stream represents the union of locales supported
 by the Java runtime environment and by deployed
 `java.util.spi.LocaleServiceProvider LocaleServiceProvider`
 implementations. At a minimum, the returned stream must contain a
 `Locale` instance equal to `ROOT Locale.ROOT` and
 a `Locale` instance equal to `US Locale.US`.

 not create a defensive copy of the Locale array.

> *Since 21*
