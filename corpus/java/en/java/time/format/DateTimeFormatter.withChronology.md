---
id: "java-en-function-datetimeformatter-withchronology"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.withChronology"
signature: "public DateTimeFormatter withChronology(Chronology chrono)"
title: "DateTimeFormatter.withChronology"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.withChronology

```java
public DateTimeFormatter withChronology(Chronology chrono)
```

Returns a copy of this formatter with a new override chronology.
 

 This returns a formatter with similar state to this formatter but
 with the override chronology set.
 By default, a formatter has no override chronology, returning null.
 

 If an override is added, then any date that is formatted or parsed will be affected.
 

 When formatting, if the temporal object contains a date, then it will
 be converted to a date in the override chronology.
 Whether the temporal contains a date is determined by querying the
 `EPOCH_DAY EPOCH_DAY` field.
 Any time or zone will be retained unaltered unless overridden.
 

 If the temporal object does not contain a date, but does contain one
 or more `ChronoField` date fields, then a `DateTimeException`
 is thrown. In all other cases, the override chronology is added to the temporal,
 replacing any previous chronology, but without changing the date/time.
 

 When parsing, there are two distinct cases to consider.
 If a chronology has been parsed directly from the text, perhaps because
 `appendChronologyId` was used, then
 this override chronology has no effect.
 If no zone has been parsed, then this override chronology will be used
 to interpret the `ChronoField` values into a date according to the
 date resolving rules of the chronology.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **chrono** — the new chronology, null if no override

**返回**

- a formatter based on this formatter with the requested override chronology, not null
