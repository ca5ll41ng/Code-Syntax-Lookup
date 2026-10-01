---
id: "java-en-function-dayofweek-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "DayOfWeek.getDisplayName"
signature: "public String getDisplayName(TextStyle style, Locale locale)"
title: "DayOfWeek.getDisplayName"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/DayOfWeek.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DayOfWeek.getDisplayName

```java
public String getDisplayName(TextStyle style, Locale locale)
```

Gets the textual representation, such as 'Mon' or 'Friday'.
 

 This returns the textual name used to identify the day-of-week,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 

 If no textual mapping is found then the `getValue() numeric value` is returned.

**参数**

- **style** — the length of the text required, not null
- **locale** — the locale to use, not null

**返回**

- the text value of the day-of-week, not null
