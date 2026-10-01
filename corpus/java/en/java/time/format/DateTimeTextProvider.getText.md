---
id: "java-en-function-datetimetextprovider-gettext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeTextProvider.getText"
signature: "public String getText(TemporalField field, long value, TextStyle style, Locale locale)"
title: "DateTimeTextProvider.getText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeTextProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeTextProvider.getText

```java
public String getText(TemporalField field, long value, TextStyle style, Locale locale)
```

Gets the text for the specified field, locale and style
 for the purpose of formatting.
 

 The text associated with the value is returned.
 The null return value should be used if there is no applicable text, or
 if the text would be a numeric representation of the value.

**参数**

- **field** — the field to get text for, not null
- **value** — the field value to get text for, not null
- **style** — the style to get text for, not null
- **locale** — the locale to get text for, not null

**返回**

- the text for the field value, null if no text found
