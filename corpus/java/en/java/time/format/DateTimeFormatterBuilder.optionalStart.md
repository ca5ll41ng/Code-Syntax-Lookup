---
id: "java-en-function-datetimeformatterbuilder-optionalstart"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.optionalStart"
signature: "public DateTimeFormatterBuilder optionalStart()"
title: "DateTimeFormatterBuilder.optionalStart"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.optionalStart

```java
public DateTimeFormatterBuilder optionalStart()
```

Mark the start of an optional section.
 

 The output of formatting can include optional sections, which may be nested.
 An optional section is started by calling this method and ended by calling
 `optionalEnd` or by ending the build process.
 

 All elements in the optional section are treated as optional.
 During formatting, the section is only output if data is available in the
 `TemporalAccessor` for all the elements in the section.
 During parsing, the whole section may be missing from the parsed string.
 

 For example, consider a builder setup as
 `builder.appendValue(HOUR_OF_DAY,2).optionalStart().appendValue(MINUTE_OF_HOUR,2)`.
 The optional section ends automatically at the end of the builder.
 During formatting, the minute will only be output if its value can be obtained from the date-time.
 During parsing, the input will be successfully parsed whether the minute is present or not.

**返回**

- this, for chaining, not null
