---
id: "java-en-function-month-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Month.getDisplayName"
signature: "public String getDisplayName(TextStyle style, Locale locale)"
title: "Month.getDisplayName"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.getDisplayName

```java
public String getDisplayName(TextStyle style, Locale locale)
```

Gets the textual representation, such as 'Jan' or 'December'.
 

 This returns the textual name used to identify the month-of-year,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 

 If no textual mapping is found then the `getValue() numeric value` is returned.

**参数**

- **style** — the length of the text required, not null
- **locale** — the locale to use, not null

**返回**

- the text value of the month-of-year, not null
