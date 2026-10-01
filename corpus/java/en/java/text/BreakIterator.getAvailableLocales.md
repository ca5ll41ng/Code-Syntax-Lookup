---
id: "java-en-function-breakiterator-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "BreakIterator.getAvailableLocales"
signature: "public static synchronized Locale[] getAvailableLocales()"
title: "BreakIterator.getAvailableLocales"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/BreakIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BreakIterator.getAvailableLocales

```java
public static synchronized Locale[] getAvailableLocales()
```

Returns an array of all locales for which the
 `get*Instance` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `java.text.spi.BreakIteratorProvider BreakIteratorProvider` implementations.
 At a minimum, the returned array must contain a `Locale` instance equal to
 `ROOT Locale.ROOT` and a `Locale` instance equal to
 `US Locale.US`.

**返回**

- An array of locales for which localized `BreakIterator` instances are available.
