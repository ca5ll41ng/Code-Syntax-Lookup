---
id: "java-en-function-datetimeformatterbuilder-appendchronologytext"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendChronologyText"
signature: "public DateTimeFormatterBuilder appendChronologyText(TextStyle textStyle)"
title: "DateTimeFormatterBuilder.appendChronologyText"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendChronologyText

```java
public DateTimeFormatterBuilder appendChronologyText(TextStyle textStyle)
```

Appends the chronology name to the formatter.
 

 The calendar system name will be output during a format.
 If the chronology cannot be obtained then an exception will be thrown.

**参数**

- **textStyle** — the text style to use, not null

**返回**

- this, for chaining, not null
