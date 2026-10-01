---
id: "java-en-function-chronology-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "Chronology.getDisplayName"
signature: "default String getDisplayName(TextStyle style, Locale locale)"
title: "Chronology.getDisplayName"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.getDisplayName

```java
default String getDisplayName(TextStyle style, Locale locale)
```

Gets the textual representation of this chronology.
 

 This returns the textual name used to identify the chronology,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.

 The default implementation behaves as though the formatter was used to
 format the chronology textual name.

**参数**

- **style** — the style of the text required, not null
- **locale** — the locale to use, not null

**返回**

- the text value of the chronology, not null
