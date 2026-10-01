---
id: "java-en-function-localeserviceprovider-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "LocaleServiceProvider.getAvailableLocales"
signature: "public abstract Locale[] getAvailableLocales()"
title: "LocaleServiceProvider.getAvailableLocales"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleServiceProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleServiceProvider.getAvailableLocales

```java
public abstract Locale[] getAvailableLocales()
```

{@return an array of all locales for which this locale service provider
 can provide localized objects or names}

 This information is used to compose `getAvailableLocales()`
 values of the locale-dependent services, such as
 `DateFormat.getAvailableLocales()`.

 

The array returned by this method should not include two or more
 `Locale` objects only differing in their extensions.
