---
id: "java-en-function-datetimeformatterbuilder-optionalend"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.optionalEnd"
signature: "public DateTimeFormatterBuilder optionalEnd()"
title: "DateTimeFormatterBuilder.optionalEnd"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.optionalEnd

```java
public DateTimeFormatterBuilder optionalEnd()
```

Ends an optional section.
 

 The output of formatting can include optional sections, which may be nested.
 An optional section is started by calling `optionalStart` and ended
 using this method (or at the end of the builder).
 

 Calling this method without having previously called `optionalStart`
 will throw an exception.
 Calling this method immediately after calling `optionalStart` has no effect
 on the formatter other than ending the (empty) optional section.
 

 All elements in the optional section are treated as optional.
 During formatting, the section is only output if data is available in the
 `TemporalAccessor` for all the elements in the section.
 During parsing, the whole section may be missing from the parsed string.
 

 For example, consider a builder setup as
 `builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2).optionalEnd()`.
 During formatting, the minute will only be output if its value can be obtained from the date-time.
 During parsing, the input will be successfully parsed whether the minute is present or not.

**返回**

- this, for chaining, not null

**异常**

- **IllegalStateException** — if there was no previous call to `optionalStart`
