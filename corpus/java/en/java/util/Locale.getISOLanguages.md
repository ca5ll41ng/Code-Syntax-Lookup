---
id: "java-en-function-locale-getisolanguages"
language: "java"
lang: "en"
category: "function"
name: "Locale.getISOLanguages"
signature: "public static String[] getISOLanguages()"
title: "Locale.getISOLanguages"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getISOLanguages

```java
public static String[] getISOLanguages()
```

Returns a list of all 2-letter language codes defined in ISO 639.
 Can be used to obtain Locales.
 

 **Note:**
 
 
- ISO 639 is not a stable standard&mdash; some languages' codes have changed.
 The list this function returns includes both the new and the old codes for the
 languages whose codes have changed.
 
- The `Locale` class also supports language codes up to
 8 characters in length.  Therefore, the list returned by this method does
 not contain ALL valid codes that can be used to obtain Locales.

**返回**

- An array of ISO 639 two-letter language codes.
