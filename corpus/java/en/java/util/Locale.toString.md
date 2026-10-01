---
id: "java-en-function-locale-tostring"
language: "java"
lang: "en"
category: "function"
name: "Locale.toString"
signature: "public final String toString()"
title: "Locale.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.toString

```java
public final String toString()
```

Returns a string representation of this `Locale`
 object, consisting of language, country, variant, script,
 and extensions as below:
 
 language + "_" + country + "_" + (variant + "_#" | "#") + script + "_" + extensions
 

 Language is always lower case, country is always upper case, script is always title
 case, and extensions are always lower case.  Extensions and private use subtags
 will be in canonical order as explained in `toLanguageTag`.

 

When the locale has neither script nor extensions, the result is the same as in
 Java 6 and prior.

 

If both the language and country fields are missing, this function will return
 the empty string, even if the variant, script, or extensions field is present
 (a locale with just a variant is not allowed, the variant must accompany a well-formed
 language or country code).

 

If script or extensions are present and variant is missing, no underscore is
 added before the "#".

 

This behavior is designed to support debugging and to be compatible with
 previous uses of `toString` that expected language, country, and variant
 fields only.  To represent a Locale as a String for interchange purposes, use
 `toLanguageTag`.

 

Examples: 
 
- `en`
 
- `de_DE`
 
- `_GB`
 
- `en_US_WIN`
 
- `de__POSIX`
 
- `zh_CN_#Hans`
 
- `zh_TW_#Hant_x-java`
 
- `th_TH_TH_#u-nu-thai`

**返回**

- A string representation of the Locale, for debugging.

**参见**

- #getDisplayName
- #toLanguageTag
