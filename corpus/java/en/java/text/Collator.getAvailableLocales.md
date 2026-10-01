---
id: "java-en-function-collator-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "Collator.getAvailableLocales"
signature: "public static synchronized Locale[] getAvailableLocales()"
title: "Collator.getAvailableLocales"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.getAvailableLocales

```java
public static synchronized Locale[] getAvailableLocales()
```

Returns an array of all locales for which the
 `getInstance` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported
 by the Java runtime and by installed
 `java.text.spi.CollatorProvider CollatorProvider` implementations.
 At a minimum, the returned array must contain a `Locale` instance equal to
 `ROOT Locale.ROOT` and a `Locale` instance equal to
 `US Locale.US`.

**返回**

- An array of locales for which localized `Collator` instances are available.
