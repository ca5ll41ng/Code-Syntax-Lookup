---
id: "java-en-function-duration-equals"
language: "java"
lang: "en"
category: "function"
name: "Duration.equals"
signature: "public boolean equals(final Object duration)"
title: "Duration.equals"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.equals

```java
public boolean equals(final Object duration)
```

Checks if this duration object has the same duration
 as another `Duration` object.

 

For example, "P1D" (1 day) is equal to "PT24H" (24 hours).

 

Duration X is equal to Y if and only if time instant
 t+X and t+Y are the same for all the test time instants
 specified in the section 3.2.6.2 of the XML Schema 1.0
 specification.

 

Note that there are cases where two `Duration`s are
 "incomparable" to each other, like one month and 30 days.
 For example,
 
```

 !new Duration("P1M").isShorterThan(new Duration("P30D"))
 !new Duration("P1M").isLongerThan(new Duration("P30D"))
 !new Duration("P1M").equals(new Duration("P30D"))
 
```

**参数**

- **duration** — The object to compare this `Duration` against.

**返回**

- `true` if this duration is the same length as `duration`. `false` if `duration` is `null`, is not a `Duration` object, or its length is different from this duration.

**异常**

- **UnsupportedOperationException** — If the underlying implementation cannot reasonably process the request, e.g. W3C XML Schema allows for arbitrarily large/small/precise values, the request may be beyond the implementations capability.

**参见**

- #compare(Duration duration)
