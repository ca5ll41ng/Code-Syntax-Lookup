---
id: "java-en-function-localenameprovider-getdisplayscript"
language: "java"
lang: "en"
category: "function"
name: "LocaleNameProvider.getDisplayScript"
signature: "public String getDisplayScript(String scriptCode, Locale locale)"
title: "LocaleNameProvider.getDisplayScript"
directive: "method"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleNameProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleNameProvider.getDisplayScript

```java
public String getDisplayScript(String scriptCode, Locale locale)
```

Returns a localized name for the given 
 IETF BCP47 script code and the given locale that is appropriate for
 display to the user.
 For example, if `scriptCode` is "Latn" and `locale`
 is en_US, getDisplayScript() will return "Latin"; if `scriptCode`
 is "Cyrl" and `locale` is fr_FR, getDisplayScript() will return "cyrillique".
 If the name returned cannot be localized according to `locale`,
 (say, the provider does not have a Japanese name for Cyrillic),
 this method returns null. The default implementation returns null.

**参数**

- **scriptCode** — the four letter script code string in the form of title-case letters (the first letter is upper-case character between 'A' (U+0041) and 'Z' (U+005A) followed by three lower-case character between 'a' (U+0061) and 'z' (U+007A)).
- **locale** — the desired locale

**返回**

- the name of the given script code for the specified locale, or null if it's not available.

**异常**

- **NullPointerException** — if `scriptCode` or `locale` is null
- **IllegalArgumentException** — if `scriptCode` is not in the form of four title case letters, or `locale` isn't one of the locales returned from `getAvailableLocales() getAvailableLocales`.

**参见**

- java.util.Locale#getDisplayScript(java.util.Locale)

> *Since 1.7*
