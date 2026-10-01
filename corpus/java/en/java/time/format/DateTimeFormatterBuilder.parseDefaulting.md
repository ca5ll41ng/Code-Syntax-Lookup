---
id: "java-en-function-datetimeformatterbuilder-parsedefaulting"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.parseDefaulting"
signature: "public DateTimeFormatterBuilder parseDefaulting(TemporalField field, long value)"
title: "DateTimeFormatterBuilder.parseDefaulting"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.parseDefaulting

```java
public DateTimeFormatterBuilder parseDefaulting(TemporalField field, long value)
```

Appends a default value for a field to the formatter for use in parsing.
 

 This appends an instruction to the builder to inject a default value
 into the parsed result. This is especially useful in conjunction with
 optional parts of the formatter.
 

 For example, consider a formatter that parses the year, followed by
 an optional month, with a further optional day-of-month. Using such a
 formatter would require the calling code to check whether a full date,
 year-month or just a year had been parsed. This method can be used to
 default the month and day-of-month to a sensible value, such as the
 first of the month, allowing the calling code to always get a date.
 

 During formatting, this method has no effect.
 

 During parsing, the current state of the parse is inspected.
 If the specified field has no associated value, because it has not been
 parsed successfully at that point, then the specified value is injected
 into the parse result. Injection is immediate, thus the field-value pair
 will be visible to any subsequent elements in the formatter.
 As such, this method is normally called at the end of the builder.

**参数**

- **field** — the field to default the value of, not null
- **value** — the value to default the field to

**返回**

- this, for chaining, not null
