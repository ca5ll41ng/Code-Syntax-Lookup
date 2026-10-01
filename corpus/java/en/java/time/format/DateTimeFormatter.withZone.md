---
id: "java-en-function-datetimeformatter-withzone"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.withZone"
signature: "public DateTimeFormatter withZone(ZoneId zone)"
title: "DateTimeFormatter.withZone"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.withZone

```java
public DateTimeFormatter withZone(ZoneId zone)
```

Returns a copy of this formatter with a new override zone.
 

 This returns a formatter with similar state to this formatter but
 with the override zone set.
 By default, a formatter has no override zone, returning null.
 

 If an override is added, then any instant that is formatted or parsed will be affected.
 

 When formatting, if the temporal object contains an instant, then it will
 be converted to a zoned date-time using the override zone.
 Whether the temporal is an instant is determined by querying the
 `INSTANT_SECONDS INSTANT_SECONDS` field.
 If the input has a chronology then it will be retained unless overridden.
 If the input does not have a chronology, such as `Instant`, then
 the ISO chronology will be used.
 

 If the temporal object does not contain an instant, but does contain
 an offset then an additional check is made. If the normalized override
 zone is an offset that differs from the offset of the temporal, then
 a `DateTimeException` is thrown. In all other cases, the override
 zone is added to the temporal, replacing any previous zone, but without
 changing the date/time.
 

 When parsing, there are two distinct cases to consider.
 If a zone has been parsed directly from the text, perhaps because
 `appendZoneId` was used, then
 this override zone has no effect.
 If no zone has been parsed, then this override zone will be included in
 the result of the parse where it can be used to build instants and date-times.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **zone** — the new override zone, null if no override

**返回**

- a formatter based on this formatter with the requested override zone, not null
