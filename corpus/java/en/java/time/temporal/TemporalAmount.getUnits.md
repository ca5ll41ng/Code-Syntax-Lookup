---
id: "java-en-function-temporalamount-getunits"
language: "java"
lang: "en"
category: "function"
name: "TemporalAmount.getUnits"
signature: "List<TemporalUnit> getUnits()"
title: "TemporalAmount.getUnits"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalAmount.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalAmount.getUnits

```java
List<TemporalUnit> getUnits()
```

Returns the list of units uniquely defining the value of this TemporalAmount.
 The list of `TemporalUnits` is defined by the implementation class.
 The list is a snapshot of the units at the time `getUnits`
 is called and is not mutable.
 The units are ordered from longest duration to the shortest duration
 of the unit.

 The list of units completely and uniquely represents the
 state of the object without omissions, overlaps or duplication.
 The units are in order from longest duration to shortest.

**返回**

- the List of `TemporalUnits`; not null
