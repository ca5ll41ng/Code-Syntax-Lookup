---
id: "java-en-function-datetimeformatterbuilder-appendchronologyid"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatterBuilder.appendChronologyId"
signature: "public DateTimeFormatterBuilder appendChronologyId()"
title: "DateTimeFormatterBuilder.appendChronologyId"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatterBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatterBuilder.appendChronologyId

```java
public DateTimeFormatterBuilder appendChronologyId()
```

Appends the chronology ID, such as 'ISO' or 'ThaiBuddhist', to the formatter.
 

 This appends an instruction to format/parse the chronology ID to the builder.
 

 During formatting, the chronology is obtained using a mechanism equivalent
 to querying the temporal with `chronology`.
 It will be printed using the result of `getId`.
 If the chronology cannot be obtained then an exception is thrown unless the
 section of the formatter is optional.
 

 During parsing, the chronology is parsed and must match one of the chronologies
 in `getAvailableChronologies`.
 If the chronology cannot be parsed then an exception is thrown unless the
 section of the formatter is optional.
 The parser uses the `parseCaseInsensitive() case sensitive` setting.

**返回**

- this, for chaining, not null
