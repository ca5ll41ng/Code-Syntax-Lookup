---
id: "java-en-function-datetimeformatter-getlocale"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.getLocale"
signature: "public Locale getLocale()"
title: "DateTimeFormatter.getLocale"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.getLocale

```java
public Locale getLocale()
```

Gets the locale to be used during formatting.
 

 This is used to lookup any part of the formatter needing specific
 localization, such as the text or localized pattern.

**返回**

- the locale of this formatter, not null
