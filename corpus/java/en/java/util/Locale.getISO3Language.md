---
id: "java-en-function-locale-getiso3language"
language: "java"
lang: "en"
category: "function"
name: "Locale.getISO3Language"
signature: "public String getISO3Language() throws MissingResourceException"
title: "Locale.getISO3Language"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getISO3Language

```java
public String getISO3Language() throws MissingResourceException
```

{@return a three-letter abbreviation of this locale's language}

 If the language matches an ISO 639-1 two-letter code, the
 corresponding ISO 639-2/T three-letter lowercase code is
 returned.  The ISO 639-2 language codes can be found on-line,
 see "Codes for the Representation of Names of Languages Part 2:
 Alpha-3 Code".  If the locale specifies a three-letter
 language, the language is returned as is.  If the locale does
 not specify a language the empty string is returned.

**异常**

- **MissingResourceException** — Throws MissingResourceException if three-letter language abbreviation is not available for this locale.
