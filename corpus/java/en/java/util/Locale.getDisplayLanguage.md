---
id: "java-en-function-locale-getdisplaylanguage"
language: "java"
lang: "en"
category: "function"
name: "Locale.getDisplayLanguage"
signature: "public String getDisplayLanguage()"
title: "Locale.getDisplayLanguage"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getDisplayLanguage

```java
public String getDisplayLanguage()
```

Returns a name for `this` locale's language that is appropriate for display to the
 user.
 If possible, the name returned will be localized for the default
 `DISPLAY DISPLAY` locale.
 For example, if the locale is fr_FR and the default
 `DISPLAY DISPLAY` locale
 is en_US, getDisplayLanguage() will return "French"; if the locale is en_US and
 the default `DISPLAY DISPLAY` locale is fr_FR,
 getDisplayLanguage() will return "anglais".
 If the name returned cannot be localized for the default
 `DISPLAY DISPLAY` locale,
 this function falls back on the English name, and uses the ISO code as a last-resort
 value.  If the locale doesn't specify a language, this function returns the empty string.

**返回**

- The name of the display language appropriate to the default `DISPLAY DISPLAY` locale.
