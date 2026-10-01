---
id: "java-en-function-zoneoffset-from"
language: "java"
lang: "en"
category: "function"
name: "ZoneOffset.from"
signature: "public static ZoneOffset from(TemporalAccessor temporal)"
title: "ZoneOffset.from"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneOffset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneOffset.from

```java
public static ZoneOffset from(TemporalAccessor temporal)
```

Obtains an instance of `ZoneOffset` from a temporal object.
 

 This obtains an offset based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ZoneOffset`.
 

 A `TemporalAccessor` represents some form of date and time information.
 This factory converts the arbitrary temporal object to an instance of `ZoneOffset`.
 

 The conversion uses the `offset` query, which relies
 on extracting the `OFFSET_SECONDS OFFSET_SECONDS` field.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `ZoneOffset::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the zone-offset, not null

**异常**

- **DateTimeException** — if unable to convert to an `ZoneOffset`
