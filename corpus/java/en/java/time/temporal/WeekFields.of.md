---
id: "java-en-function-weekfields-of"
language: "java"
lang: "en"
category: "function"
name: "WeekFields.of"
signature: "public static WeekFields of(Locale locale)"
title: "WeekFields.of"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/WeekFields.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeekFields.of

```java
public static WeekFields of(Locale locale)
```

Obtains an instance of `WeekFields` appropriate for a locale.
 

 This will look up appropriate values from the provider of localization data.
 If the locale contains "fw" (First day of week) and/or "rg"
 (Region Override) `#def_locale_extension Unicode extensions`,
 returned instance will reflect the values specified with
 those extensions. If both "fw" and "rg" are specified, the value from
 the "fw" extension supersedes the implicit one from the "rg" extension.

 

For example, users who are interested in using an English locale,
 but want the first day of the week that corresponds with the ISO-8601
 standard can call
 {@snippet lang=java :
 Locale enIsoLoc = Locale.forLanguageTag("en-u-fw-mon");
 WeekFields.of(enIsoLoc).getFirstDayOfWeek(); // returns MONDAY
 }

**参数**

- **locale** — the locale to use, not null

**返回**

- the week-definition, not null
