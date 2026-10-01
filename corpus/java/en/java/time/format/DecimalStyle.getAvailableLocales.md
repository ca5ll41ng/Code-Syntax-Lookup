---
id: "java-en-function-decimalstyle-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "DecimalStyle.getAvailableLocales"
signature: "public static Set<Locale> getAvailableLocales()"
title: "DecimalStyle.getAvailableLocales"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DecimalStyle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DecimalStyle.getAvailableLocales

```java
public static Set<Locale> getAvailableLocales()
```

Lists all the locales that are supported.
 

 At a minimum, the returned `Set` must contain a `Locale` instance equal to
 `ROOT Locale.ROOT` and a `Locale` instance equal to
 `US Locale.US`.

**返回**

- a Set of Locales for which localization is supported
