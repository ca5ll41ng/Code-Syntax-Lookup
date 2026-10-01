---
id: "java-en-function-temporal-until"
language: "java"
lang: "en"
category: "function"
name: "Temporal.until"
signature: "long until(Temporal endExclusive, TemporalUnit unit)"
title: "Temporal.until"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/Temporal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Temporal.until

```java
long until(Temporal endExclusive, TemporalUnit unit)
```

Calculates the amount of time until another temporal in terms of the specified unit.
 

 This calculates the amount of time between two temporal objects
 in terms of a single `TemporalUnit`.
 The start and end points are `this` and the specified temporal.
 The end point is converted to be of the same type as the start point if different.
 The result will be negative if the end is before the start.
 For example, the amount in hours between two temporal objects can be
 calculated using `startTime.until(endTime, HOURS)`.
 

 The calculation returns a whole number, representing the number of
 complete units between the two temporals.
 For example, the amount in hours between the times 11:30 and 13:29
 will only be one hour as it is one minute short of two hours.
 

 There are two equivalent ways of using this method.
 The first is to invoke this method directly.
 The second is to use `between`:
 
```

   // these two lines are equivalent
   amount = start.until(end, unit);
   amount = unit.between(start, end);
 
```

 The choice should be made based on which makes the code more readable.
 

 For example, this method allows the number of days between two dates to
 be calculated:
 
```

  long daysBetween = start.until(end, DAYS);
  // or alternatively
  long daysBetween = DAYS.between(start, end);
 
```

 Implementations must begin by checking to ensure that the input temporal
 object is of the same observable type as the implementation.
 They must then perform the calculation for all instances of `ChronoUnit`.
 An `UnsupportedTemporalTypeException` must be thrown for `ChronoUnit`
 instances that are unsupported.
 

 If the unit is not a `ChronoUnit`, then the result of this method
 is obtained by invoking `TemporalUnit.between(Temporal, Temporal)`
 passing `this` as the first argument and the converted input temporal as
 the second argument.
 

 In summary, implementations must behave in a manner equivalent to this pseudo-code:
 
```

  // convert the end temporal to the same type as this class
  if (unit instanceof ChronoUnit) {
    // if unit is supported, then calculate and return result
    // else throw UnsupportedTemporalTypeException for unsupported units
  }
  return unit.between(this, convertedEndTemporal);
 
```

 

 Note that the unit's `between` method must only be invoked if the
 two temporal objects have exactly the same type evaluated by `getClass()`.
 

 Implementations must ensure that no observable state is altered when this
 read-only method is invoked.

**参数**

- **endExclusive** — the end temporal, exclusive, converted to be of the same type as this object, not null
- **unit** — the unit to measure the amount in, not null

**返回**

- the amount of time between this temporal object and the specified one in terms of the unit; positive if the specified object is later than this one, negative if it is earlier than this one

**异常**

- **DateTimeException** — if the amount cannot be calculated, or the end temporal cannot be converted to the same type as this temporal
- **UnsupportedTemporalTypeException** — if the unit is not supported
- **ArithmeticException** — if numeric overflow occurs
