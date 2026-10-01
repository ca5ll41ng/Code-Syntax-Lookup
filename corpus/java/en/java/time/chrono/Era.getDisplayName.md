---
id: "java-en-function-era-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Era.getDisplayName"
signature: "default String getDisplayName(TextStyle style, Locale locale)"
title: "Era.getDisplayName"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Era.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Era.getDisplayName

```java
default String getDisplayName(TextStyle style, Locale locale)
```

Gets the textual representation of this era.
 

 This returns the textual name used to identify the era,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 

 If no textual mapping is found then the `getValue() numeric value` is returned.

**参数**

- **style** — the style of the text required, not null
- **locale** — the locale to use, not null

**返回**

- the text value of the era, not null
