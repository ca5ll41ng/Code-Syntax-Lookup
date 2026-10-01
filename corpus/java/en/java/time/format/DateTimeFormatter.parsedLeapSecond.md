---
id: "java-en-function-datetimeformatter-parsedleapsecond"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.parsedLeapSecond"
signature: "public static final TemporalQuery<Boolean> parsedLeapSecond()"
title: "DateTimeFormatter.parsedLeapSecond"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.parsedLeapSecond

```java
public static final TemporalQuery<Boolean> parsedLeapSecond()
```

A query that provides access to whether a leap-second was parsed.
 

 This returns a singleton `TemporalQuery query` that provides
 access to additional information from the parse. The query always returns
 a non-null boolean, true if parsing saw a leap-second, false if not.
 

 Instant parsing handles the special "leap second" time of '23:59:60'.
 Leap seconds occur at '23:59:60' in the UTC time-zone, but at other
 local times in different time-zones. To avoid this potential ambiguity,
 the handling of leap-seconds is limited to
 `appendInstant`, as that method
 always parses the instant with the UTC zone offset.
 

 If the time '23:59:60' is received, then a simple conversion is applied,
 replacing the second-of-minute of 60 with 59. This query can be used
 on the parse result to determine if the leap-second adjustment was made.
 The query will return `true` if it did adjust to remove the
 leap-second, and `false` if not. Note that applying a leap-second
 smoothing mechanism, such as UTC-SLS, is the responsibility of the
 application, as follows:
 
```

  TemporalAccessor parsed = formatter.parse(str);
  Instant instant = parsed.query(Instant::from);
  if (parsed.query(DateTimeFormatter.parsedLeapSecond())) {
    // validate leap-second is correct and apply correct smoothing
  }
 
```

**返回**

- a query that provides access to whether a leap-second was parsed
