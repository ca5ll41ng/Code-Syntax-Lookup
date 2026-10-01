---
id: "java-en-function-localeserviceprovider-issupportedlocale"
language: "java"
lang: "en"
category: "function"
name: "LocaleServiceProvider.isSupportedLocale"
signature: "public boolean isSupportedLocale(Locale locale)"
title: "LocaleServiceProvider.isSupportedLocale"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleServiceProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleServiceProvider.isSupportedLocale

```java
public boolean isSupportedLocale(Locale locale)
```

Returns `true` if the given `locale` is supported by
 this locale service provider. The given `locale` may contain
 `#def_extensions extensions` that should be
 taken into account for the support determination.

 

The default implementation returns `true` if the given `locale`
 is equal to any of the available `Locale`s returned by
 `getAvailableLocales` with ignoring any extensions in both the
 given `locale` and the available locales. Concrete locale service
 provider implementations should override this method if those
 implementations are `Locale` extensions-aware. For example,
 `DecimalFormatSymbolsProvider` implementations will need to check
 extensions in the given `locale` to see if any numbering system is
 specified and can be supported. However, `CollatorProvider`
 implementations may not be affected by any particular numbering systems,
 and in that case, extensions for numbering systems should be ignored.

**参数**

- **locale** — a `Locale` to be tested

**返回**

- `true` if the given `locale` is supported by this provider; `false` otherwise.

**异常**

- **NullPointerException** — if the given `locale` is `null`

**参见**

- Locale#hasExtensions()
- Locale#stripExtensions()

> *Since 1.8*
