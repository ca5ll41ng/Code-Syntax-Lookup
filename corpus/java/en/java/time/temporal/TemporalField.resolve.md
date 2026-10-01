---
id: "java-en-function-temporalfield-resolve"
language: "java"
lang: "en"
category: "function"
name: "TemporalField.resolve"
signature: "default TemporalAccessor resolve( Map<TemporalField, Long> fieldValues, TemporalAccessor partialTemporal, ResolverStyle resolverStyle)"
title: "TemporalField.resolve"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalField.resolve

```java
default TemporalAccessor resolve( Map<TemporalField, Long> fieldValues, TemporalAccessor partialTemporal, ResolverStyle resolverStyle)
```

Resolves this field to provide a simpler alternative or a date.
 

 This method is invoked during the resolve phase of parsing.
 It is designed to allow application defined fields to be simplified into
 more standard fields, such as those on `ChronoField`, or into a date.
 

 Applications should not normally invoke this method directly.

 If an implementation represents a field that can be simplified, or
 combined with others, then this method must be implemented.
 

 The specified map contains the current state of the parse.
 The map is mutable and must be mutated to resolve the field and
 any related fields. This method will only be invoked during parsing
 if the map contains this field, and implementations should therefore
 assume this field is present.
 

 Resolving a field will consist of looking at the value of this field,
 and potentially other fields, and either updating the map with a
 simpler value, such as a `ChronoField`, or returning a
 complete `ChronoLocalDate`. If a resolve is successful,
 the code must remove all the fields that were resolved from the map,
 including this field.
 

 For example, the `IsoFields` class contains the quarter-of-year
 and day-of-quarter fields. The implementation of this method in that class
 resolves the two fields plus the `YEAR YEAR` into a
 complete `LocalDate`. The resolve method will remove all three
 fields from the map before returning the `LocalDate`.
 

 A partially complete temporal is used to allow the chronology and zone
 to be queried. In general, only the chronology will be needed.
 Querying items other than the zone or chronology is undefined and
 must not be relied on.
 The behavior of other methods such as `get`, `getLong`,
 `range` and `isSupported` is unpredictable and the results undefined.
 

 If resolution should be possible, but the data is invalid, the resolver
 style should be used to determine an appropriate level of leniency, which
 may require throwing a `DateTimeException` or `ArithmeticException`.
 If no resolution is possible, the resolve method must return null.
 

 When resolving time fields, the map will be altered and null returned.
 When resolving date fields, the date is normally returned from the method,
 with the map altered to remove the resolved fields. However, it would also
 be acceptable for the date fields to be resolved into other `ChronoField`
 instances that can produce a date, such as `EPOCH_DAY`.
 

 Not all `TemporalAccessor` implementations are accepted as return values.
 Implementations that call this method must accept `ChronoLocalDate`,
 `ChronoLocalDateTime`, `ChronoZonedDateTime` and `LocalTime`.
 

 The default implementation must return null.

**参数**

- **fieldValues** — the map of fields to values, which can be updated, not null
- **partialTemporal** — the partially complete temporal to query for zone and chronology; querying for other things is undefined and not recommended, not null
- **resolverStyle** — the requested type of resolve, not null

**返回**

- the resolved temporal object; null if resolving only changed the map, or no resolve occurred

**异常**

- **ArithmeticException** — if numeric overflow occurs
- **DateTimeException** — if resolving results in an error. This must not be thrown by querying a field on the temporal without first checking if it is supported
