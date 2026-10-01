---
id: "java-en-function-zoneid-from"
language: "java"
lang: "en"
category: "function"
name: "ZoneId.from"
signature: "public static ZoneId from(TemporalAccessor temporal)"
title: "ZoneId.from"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/ZoneId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZoneId.from

```java
public static ZoneId from(TemporalAccessor temporal)
```

Obtains an instance of `ZoneId` from a temporal object.
 

 This obtains a zone based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `ZoneId`.
 

 A `TemporalAccessor` represents some form of date and time information.
 This factory converts the arbitrary temporal object to an instance of `ZoneId`.
 

 The conversion will try to obtain the zone in a way that favours region-based
 zones over offset-based zones using `zone`.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `ZoneId::from`.

**参数**

- **temporal** — the temporal object to convert, not null

**返回**

- the zone ID, not null

**异常**

- **DateTimeException** — if unable to convert to a `ZoneId`
