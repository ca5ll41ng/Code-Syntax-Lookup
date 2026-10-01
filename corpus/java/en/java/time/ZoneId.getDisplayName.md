---
id: "java-en-function-zoneid-getdisplayname"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.getDisplayName"
signature: "public String getDisplayName(TextStyle style, Locale locale)"
title: "ZoneId.getDisplayName"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.getDisplayName

```java
public String getDisplayName(TextStyle style, Locale locale)
```

Gets the textual representation of the zone, such as 'British Time' or
 '+02:00'.
 

 This returns the textual name used to identify the time-zone ID,
 suitable for presentation to the user.
 The parameters control the style of the returned text and the locale.
 

 If no textual mapping is found then the `getId() full ID` is returned.

**参数**

- **style** — the length of the text required, not null
- **locale** — the locale to use, not null

**返回**

- the text value of the zone, not null
