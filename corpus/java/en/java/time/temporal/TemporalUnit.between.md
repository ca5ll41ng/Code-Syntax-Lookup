---
id: "java-en-function-temporalunit-between"
language: "java"
lang: "en"
category: "function"
name: "TemporalUnit.between"
signature: "long between(Temporal temporal1Inclusive, Temporal temporal2Exclusive)"
title: "TemporalUnit.between"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/TemporalUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TemporalUnit.between

```java
long between(Temporal temporal1Inclusive, Temporal temporal2Exclusive)
```

Calculates the amount of time between two temporal objects.
 

 This calculates the amount in terms of this unit. The start and end
 points are supplied as temporal objects and must be of compatible types.
 The implementation will convert the second type to be an instance of the
 first type before the calculating the amount.
 The result will be negative if the end is before the start.
 For example, the amount in hours between two temporal objects can be
 calculated using `HOURS.between(startTime, endTime)`.
 

 The calculation returns a whole number, representing the number of
 complete units between the two temporals. If there are smaller unit
 fields, their values are considered when determining the final
 whole number.

 For example, the amount in hours between the times 11:30 and 13:29
 will only be one hour as it is one minute short of two hours, or
 the amount in months between the dates 2024-09-29 and 2025-02-28
 (the last day in February) will be 4 months as it is one day short
 of 5 months.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `until`:
 
```

   // these two lines are equivalent
   between = thisUnit.between(start, end);
   between = start.until(end, thisUnit);
 
```

 The choice should be made based on which makes the code more readable.
 

 For example, this method allows the number of days between two dates to
 be calculated:
 
```

  long daysBetween = DAYS.between(start, end);
  // or alternatively
  long daysBetween = start.until(end, DAYS);
 
```

 

 Implementations should perform any queries or calculations using the units
 available in `ChronoUnit` or the fields available in `ChronoField`.
 If the unit is not supported an `UnsupportedTemporalTypeException` must be thrown.
 Implementations must not alter the specified temporal objects.

 Implementations must begin by checking to if the two temporals have the
 same type using `getClass()`. If they do not, then the result must be
 obtained by calling `temporal1Inclusive.until(temporal2Exclusive, this)`.

**参数**

- **temporal1Inclusive** — the base temporal object, not null
- **temporal2Exclusive** — the other temporal object, exclusive, not null

**返回**

- the amount of time between temporal1Inclusive and temporal2Exclusive in terms of this unit; positive if temporal2Exclusive is later than temporal1Inclusive, negative if earlier

**异常**

- **DateTimeException** — if the amount cannot be calculated, or the end temporal cannot be converted to the same type as the start temporal
- **UnsupportedTemporalTypeException** — if the unit is not supported by the temporal
- **ArithmeticException** — if numeric overflow occurs
