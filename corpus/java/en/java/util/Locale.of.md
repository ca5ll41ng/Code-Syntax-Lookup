---
id: "java-en-function-locale-of"
language: "java"
lang: "en"
category: "function"
name: "Locale.of"
signature: "public static Locale of(String language, String country, String variant)"
title: "Locale.of"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.of

```java
public static Locale of(String language, String country, String variant)
```

Obtains a locale from language, country and variant.
 This method normalizes the language value to lowercase and
 the country value to uppercase.
 
 
- This method does not make any syntactic checks on the input.
 Use `Locale.Builder` for full syntactic checks with BCP47.
 
- The two cases ("ja", "JP", "JP") and ("th", "TH", "TH") are handled specially,
 see `#special_cases_constructor Special Cases` for more information.
 
- Obsolete ISO 639 codes ("iw", "ji", and "in") are mapped to
 their current forms. See `#legacy_language_codes Legacy language
 codes` for more information.

**参数**

- **language** — A language code. See the `Locale` class description of `#def_language language` values.
- **country** — A country code. See the `Locale` class description of `#def_region country` values.
- **variant** — Any arbitrary value used to indicate a variation of a `Locale`. See the `Locale` class description of `#def_variant variant` values.

**返回**

- A `Locale` object

**异常**

- **NullPointerException** — thrown if any argument is null.

> *Since 19*
