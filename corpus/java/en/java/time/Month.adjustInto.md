---
id: "java-en-function-month-adjustinto"
language: "java"
lang: "en"
category: "function"
name: "Month.adjustInto"
signature: "public Temporal adjustInto(Temporal temporal)"
title: "Month.adjustInto"
directive: "method"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Month.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Month.adjustInto

```java
public Temporal adjustInto(Temporal temporal)
```

Adjusts the specified temporal object to have this month-of-year.
 

 This returns a temporal object of the same observable type as the input
 with the month-of-year changed to be the same as this.
 

 The adjustment is equivalent to using `with`
 passing `MONTH_OF_YEAR` as the field.
 If the specified temporal object does not use the ISO calendar system then
 a `DateTimeException` is thrown.
 

 In most cases, it is clearer to reverse the calling pattern by using
 `with`:
 
```

   // these two lines are equivalent, but the second approach is recommended
   temporal = thisMonth.adjustInto(temporal);
   temporal = temporal.with(thisMonth);
 
```

 

 For example, given a date in May, the following are output:
 
```

   dateInMay.with(JANUARY);    // four months earlier
   dateInMay.with(APRIL);      // one months earlier
   dateInMay.with(MAY);        // same date
   dateInMay.with(JUNE);       // one month later
   dateInMay.with(DECEMBER);   // seven months later
 
```

 

 This instance is immutable and unaffected by this method call.

**参数**

- **temporal** — the target object to be adjusted, not null

**返回**

- the adjusted object, not null

**异常**

- **DateTimeException** — if unable to make the adjustment
- **ArithmeticException** — if numeric overflow occurs
