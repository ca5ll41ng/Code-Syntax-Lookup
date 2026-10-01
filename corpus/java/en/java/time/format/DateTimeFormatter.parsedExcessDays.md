---
id: "java-en-function-datetimeformatter-parsedexcessdays"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.parsedExcessDays"
signature: "public static final TemporalQuery<Period> parsedExcessDays()"
title: "DateTimeFormatter.parsedExcessDays"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.parsedExcessDays

```java
public static final TemporalQuery<Period> parsedExcessDays()
```

A query that provides access to the excess days that were parsed.
 

 This returns a singleton `TemporalQuery query` that provides
 access to additional information from the parse. The query always returns
 a non-null period, with a zero period returned instead of null.
 

 There are two situations where this query may return a non-zero period.
 
 
- If the `ResolverStyle` is `LENIENT` and a time is parsed
  without a date, then the complete result of the parse consists of a
  `LocalTime` and an excess `Period` in days.

 
- If the `ResolverStyle` is `SMART` and a time is parsed
  without a date where the time is 24:00:00, then the complete result of
  the parse consists of a `LocalTime` of 00:00:00 and an excess
  `Period` of one day.
 

 

 In both cases, if a complete `ChronoLocalDateTime` or `Instant`
 is parsed, then the excess days are added to the date part.
 As a result, this query will return a zero period.
 

 The `SMART` behaviour handles the common "end of day" 24:00 value.
 Processing in `LENIENT` mode also produces the same result:
 
```

  Text to parse        Parsed object                         Excess days
  "2012-12-03T00:00"   LocalDateTime.of(2012, 12, 3, 0, 0)   ZERO
  "2012-12-03T24:00"   LocalDateTime.of(2012, 12, 4, 0, 0)   ZERO
  "00:00"              LocalTime.of(0, 0)                    ZERO
  "24:00"              LocalTime.of(0, 0)                    Period.ofDays(1)
 
```

 The query can be used as follows:
 
```

  TemporalAccessor parsed = formatter.parse(str);
  LocalTime time = parsed.query(LocalTime::from);
  Period extraDays = parsed.query(DateTimeFormatter.parsedExcessDays());
 
```

**返回**

- a query that provides access to the excess days that were parsed
