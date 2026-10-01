---
id: "java-en-function-calendar-getavailablecalendartypes"
language: "java"
lang: "en"
category: "function"
name: "Calendar.getAvailableCalendarTypes"
signature: "public static Set<String> getAvailableCalendarTypes()"
title: "Calendar.getAvailableCalendarTypes"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Calendar.getAvailableCalendarTypes

```java
public static Set<String> getAvailableCalendarTypes()
```

Returns an unmodifiable `Set` containing all calendar types
 supported by `Calendar` in the runtime environment. The available
 calendar types can be used for the `#def_locale_extension
 Unicode locale extensions`.
 The `Set` returned contains at least `"gregory"`. The
 calendar types don't include aliases, such as `"gregorian"` for
 `"gregory"`.

**返回**

- an unmodifiable `Set` containing all available calendar types

**参见**

- #getCalendarType()
- Calendar.Builder#setCalendarType(String)
- Locale#getUnicodeLocaleType(String)

> *Since 1.8*
