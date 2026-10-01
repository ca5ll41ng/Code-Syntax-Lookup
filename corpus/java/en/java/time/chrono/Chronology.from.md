---
id: "java-en-function-chronology-from"
language: "java"
lang: "en"
category: "function"
name: "Chronology.from"
signature: "static Chronology from(TemporalAccessor temporal)"
title: "Chronology.from"
directive: "method"
module: "java.base/java.time.chrono"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/chrono/Chronology.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Chronology.from

```java
static Chronology from(TemporalAccessor temporal)
```

Obtains an instance of `Chronology` from a temporal object.
 

 This obtains a chronology based on the specified temporal.
 A `TemporalAccessor` represents an arbitrary set of date and time information,
 which this factory converts to an instance of `Chronology`.
 

 The conversion will obtain the chronology using `chronology`.
 If the specified temporal object does not have a chronology, `IsoChronology` is returned.
 

 This method matches the signature of the functional interface `TemporalQuery`
 allowing it to be used as a query via method reference, `Chronology::from`.

**参数**

- **temporal** — the temporal to convert, not null

**返回**

- the chronology, not null

**异常**

- **DateTimeException** — if unable to convert to a `Chronology`
