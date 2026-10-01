---
id: "java-en-function-calendar-getavailablelocales"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getAvailableLocales"
signature: "public static synchronized Locale[] getAvailableLocales()"
title: "Calendar.getAvailableLocales"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getAvailableLocales

```java
public static synchronized Locale[] getAvailableLocales()
```

Returns an array of all locales for which the `getInstance`
 methods of this class can return localized instances.
 At a minimum, the returned array must contain a `Locale` instance equal to
 `ROOT Locale.ROOT` and a `Locale` instance equal to
 `US Locale.US`.

**返回**

- An array of locales for which localized `Calendar` instances are available.
