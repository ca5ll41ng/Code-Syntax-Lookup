---
id: "java-en-function-locale-getisocountries"
language: "java"
lang: "en"
category: "function"
name: "Locale.getISOCountries"
signature: "public static String[] getISOCountries()"
title: "Locale.getISOCountries"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getISOCountries

```java
public static String[] getISOCountries()
```

Returns a list of all 2-letter country codes defined in ISO 3166.
 Can be used to obtain Locales.
 This method is equivalent to `getISOCountries`
 with `type`  `PART1_ALPHA2`.
 

 **Note:** The `Locale` class also supports other codes for
 country (region), such as 3-letter numeric UN M.49 area codes.
 Therefore, the list returned by this method does not contain ALL valid
 codes that can be used to obtain Locales.
 

 Note that this method does not return obsolete 2-letter country codes.
 ISO3166-3 codes which designate country codes for those obsolete codes,
 can be retrieved from `getISOCountries` with
 `type`  `PART3`.

**返回**

- An array of ISO 3166 two-letter country codes.
