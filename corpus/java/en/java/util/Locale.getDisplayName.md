---
id: "java-en-function-locale-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Locale.getDisplayName"
signature: "public String getDisplayName()"
title: "Locale.getDisplayName"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getDisplayName

```java
public String getDisplayName()
```

Returns a name for `this` locale that is appropriate for display to the
 user. This will be the values returned by getDisplayLanguage(),
 getDisplayScript(), getDisplayCountry(), getDisplayVariant() and
 optional `#def_locale_extension Unicode extensions`
 assembled into a single string. The non-empty values are used in order, with
 the second and subsequent names in parentheses.  For example:
 
 language (script, country, variant(, extension)*)

 language (country(, extension)*)

 language (variant(, extension)*)

 script (country(, extension)*)

 country (extension)*

 
 depending on which fields are specified in the locale. The field
 separator in the above parentheses, denoted as a comma character, may
 be localized depending on the locale. If the language, script, country,
 and variant fields are all empty, this function returns the empty string.

**返回**

- The display name appropriate to the default `DISPLAY DISPLAY` locale.
