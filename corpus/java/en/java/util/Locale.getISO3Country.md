---
id: "java-en-function-locale-getiso3country"
language: "java"
lang: "en"
category: "function"
name: "Locale.getISO3Country"
signature: "public String getISO3Country() throws MissingResourceException"
title: "Locale.getISO3Country"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getISO3Country

```java
public String getISO3Country() throws MissingResourceException
```

{@return a three-letter abbreviation of this locale's country}

 If the country matches an ISO 3166-1 alpha-2 code, the
 corresponding ISO 3166-1 alpha-3 uppercase code is returned.
 If the locale doesn't specify a country, this will be the empty
 string.

 

The ISO 3166-1 codes can be found on-line.

**异常**

- **MissingResourceException** — Throws MissingResourceException if the three-letter country abbreviation is not available for this locale.
