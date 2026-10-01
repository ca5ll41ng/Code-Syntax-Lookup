---
id: "java-en-function-datetimeformatterbuilder-appendtext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendText"
signature: "public DateTimeFormatterBuilder appendText(TemporalField field)"
title: "DateTimeFormatterBuilder.appendText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendText

```java
public DateTimeFormatterBuilder appendText(TemporalField field)
```

Appends the text of a date-time field to the formatter using the full
 text style.
 

 The text of the field will be output during a format.
 The value must be within the valid range of the field.
 If the value cannot be obtained then an exception will be thrown.
 If the field has no textual representation, then the numeric value will be used.
 

 The value will be printed as per the normal format of an integer value.
 Only negative numbers will be signed. No padding will be added.

**参数**

- **field** — the field to append, not null

**返回**

- this, for chaining, not null
