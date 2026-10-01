---
id: "java-en-function-localenameprovider-getdisplaylanguage"
language: "java"
lang: "en"
category: "function"
name: "LocaleNameProvider.getDisplayLanguage"
signature: "public abstract String getDisplayLanguage(String languageCode, Locale locale)"
title: "LocaleNameProvider.getDisplayLanguage"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleNameProvider.getDisplayLanguage

```java
public abstract String getDisplayLanguage(String languageCode, Locale locale)
```

Returns a localized name for the given 
 IETF BCP47 language code and the given locale that is appropriate for
 display to the user.
 For example, if `languageCode` is "fr" and `locale`
 is en_US, getDisplayLanguage() will return "French"; if `languageCode`
 is "en" and `locale` is fr_FR, getDisplayLanguage() will return "anglais".
 If the name returned cannot be localized according to `locale`,
 (say, the provider does not have a Japanese name for Croatian),
 this method returns null.

**参数**

- **languageCode** — the language code string in the form of two to eight lower-case letters between 'a' (U+0061) and 'z' (U+007A)
- **locale** — the desired locale

**返回**

- the name of the given language code for the specified locale, or null if it's not available.

**异常**

- **NullPointerException** — if `languageCode` or `locale` is null
- **IllegalArgumentException** — if `languageCode` is not in the form of two or three lower-case letters, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.util.Locale#getDisplayLanguage(java.util.Locale)
