---
id: "java-en-function-datetimeformatterbuilder-appendvalue"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendValue"
signature: "public DateTimeFormatterBuilder appendValue(TemporalField field)"
title: "DateTimeFormatterBuilder.appendValue"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendValue

```java
public DateTimeFormatterBuilder appendValue(TemporalField field)
```

Appends the value of a date-time field to the formatter using a normal
 output style.
 

 The value of the field will be output during a format.
 If the value cannot be obtained then an exception will be thrown.
 

 The value will be printed as per the normal format of an integer value.
 Only negative numbers will be signed. No padding will be added.
 

 The parser for a variable width value such as this normally behaves greedily,
 requiring one digit, but accepting as many digits as possible.
 This behavior can be affected by 'adjacent value parsing'.
 See `appendValue` for full details.

**参数**

- **field** — the field to append, not null

**返回**

- this, for chaining, not null
