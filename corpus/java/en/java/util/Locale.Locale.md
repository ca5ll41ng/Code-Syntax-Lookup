---
id: "java-en-function-locale-locale"
language: "java"
lang: "en"
category: "function"
name: "Locale.Locale"
signature: "public Locale(String language, String country, String variant)"
title: "Locale.Locale"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.Locale

```java
public Locale(String language, String country, String variant)
```

Construct a locale from language, country and variant.
 This constructor normalizes the language value to lowercase and
 the country value to uppercase.
 
 
- Obsolete ISO 639 codes ("iw", "ji", and "in") are mapped to
 their current forms. See `#legacy_language_codes Legacy language
 codes` for more information.
 
- For backward compatibility reasons, this constructor does not make
 any syntactic checks on the input.
 
- The two cases ("ja", "JP", "JP") and ("th", "TH", "TH") are handled specially,
 see `#special_cases_constructor Special Cases` for more information.

**参数**

- **language** — An ISO 639 alpha-2 or alpha-3 language code, or a language subtag up to 8 characters in length.  See the `Locale` class description about valid language values.
- **country** — An ISO 3166 alpha-2 country code or a UN M.49 numeric-3 area code. See the `Locale` class description about valid country values.
- **variant** — Any arbitrary value used to indicate a variation of a `Locale`. See the `Locale` class description for the details.

**异常**

- **NullPointerException** — thrown if any argument is null.

> **⚠ Deprecated** — Locale constructors have been deprecated. See `#ObtainingLocale Obtaining a Locale` for other options.
