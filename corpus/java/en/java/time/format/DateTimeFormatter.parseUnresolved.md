---
id: "java-en-function-datetimeformatter-parseunresolved"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.parseUnresolved"
signature: "public TemporalAccessor parseUnresolved(CharSequence text, ParsePosition position)"
title: "DateTimeFormatter.parseUnresolved"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.parseUnresolved

```java
public TemporalAccessor parseUnresolved(CharSequence text, ParsePosition position)
```

Parses the text using this formatter, without resolving the result, intended
 for advanced use cases.
 

 Parsing is implemented as a two-phase operation.
 First, the text is parsed using the layout defined by the formatter, producing
 a `Map` of field to value, a `ZoneId` and a `Chronology`.
 Second, the parsed data is resolved, by validating, combining and
 simplifying the various fields into more useful ones.
 This method performs the parsing stage but not the resolving stage.
 

 The result of this method is `TemporalAccessor` which represents the
 data as seen in the input. Values are not validated, thus parsing a date string
 of '2012-00-65' would result in a temporal with three fields - year of '2012',
 month of '0' and day-of-month of '65'.
 

 The text will be parsed from the specified start `ParsePosition`.
 The entire length of the text does not have to be parsed, the `ParsePosition`
 will be updated with the index at the end of parsing.
 

 Errors are returned using the error index field of the `ParsePosition`
 instead of `DateTimeParseException`.
 The returned error index will be set to an index indicative of the error.
 Callers must check for errors before using the result.
 

 If the formatter parses the same field more than once with different values,
 the result will be an error.
 

 This method is intended for advanced use cases that need access to the
 internal state during parsing. Typical application code should use
 `parse` or the parse method on the target type.

**参数**

- **text** — the text to parse, not null
- **position** — the position to parse from, updated with length parsed and the index of any error, not null

**返回**

- the parsed text, null if the parse results in an error

**异常**

- **DateTimeException** — if some problem occurs during parsing
- **IndexOutOfBoundsException** — if the position is invalid
