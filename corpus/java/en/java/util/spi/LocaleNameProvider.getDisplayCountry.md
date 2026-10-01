---
id: "java-en-function-localenameprovider-getdisplaycountry"
language: "java"
lang: "en"
category: "function"
name: "LocaleNameProvider.getDisplayCountry"
signature: "public abstract String getDisplayCountry(String countryCode, Locale locale)"
title: "LocaleNameProvider.getDisplayCountry"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleNameProvider.getDisplayCountry

```java
public abstract String getDisplayCountry(String countryCode, Locale locale)
```

Returns a localized name for the given 
 IETF BCP47 region code (either ISO 3166 country code or UN M.49 area
 codes) and the given locale that is appropriate for display to the user.
 For example, if `countryCode` is "FR" and `locale`
 is en_US, getDisplayCountry() will return "France"; if `countryCode`
 is "US" and `locale` is fr_FR, getDisplayCountry() will return "Etats-Unis".
 If the name returned cannot be localized according to `locale`,
 (say, the provider does not have a Japanese name for Croatia),
 this method returns null.

**参数**

- **countryCode** — the country(region) code string in the form of two upper-case letters between 'A' (U+0041) and 'Z' (U+005A) or the UN M.49 area code in the form of three digit letters between '0' (U+0030) and '9' (U+0039).
- **locale** — the desired locale

**返回**

- the name of the given country code for the specified locale, or null if it's not available.

**异常**

- **NullPointerException** — if `countryCode` or `locale` is null
- **IllegalArgumentException** — if `countryCode` is not in the form of two upper-case letters or three digit letters, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.util.Locale#getDisplayCountry(java.util.Locale)
