---
id: "java-en-function-currencynameprovider-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "CurrencyNameProvider.getDisplayName"
signature: "public String getDisplayName(String currencyCode, Locale locale)"
title: "CurrencyNameProvider.getDisplayName"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/CurrencyNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CurrencyNameProvider.getDisplayName

```java
public String getDisplayName(String currencyCode, Locale locale)
```

Returns a name for the currency that is appropriate for display to the
 user.  The default implementation returns null.

**参数**

- **currencyCode** — the ISO 4217 currency code, which consists of three upper-case letters between 'A' (U+0041) and 'Z' (U+005A)
- **locale** — the desired locale

**返回**

- the name for the currency that is appropriate for display to the user, or null if the name is not available for the locale

**异常**

- **IllegalArgumentException** — if `currencyCode` is not in the form of three upper-case letters, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.
- **NullPointerException** — if `currencyCode` or `locale` is `null`

> *Since 1.7*
