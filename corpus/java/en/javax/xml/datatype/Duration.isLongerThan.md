---
id: "java-en-function-duration-islongerthan"
language: "java"
lang: "en"
category: "function"
name: "Duration.isLongerThan"
signature: "public boolean isLongerThan(final Duration duration)"
title: "Duration.isLongerThan"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.isLongerThan

```java
public boolean isLongerThan(final Duration duration)
```

Checks if this duration object is strictly longer than
 another `Duration` object.

 

Duration X is "longer" than Y if and only if X > Y
 as defined in the section 3.2.6.2 of the XML Schema 1.0
 specification.

 

For example, "P1D" (one day) > "PT12H" (12 hours) and
 "P2Y" (two years) > "P23M" (23 months).

**参数**

- **duration** — `Duration` to test this `Duration` against.

**返回**

- true if the duration represented by this object is longer than the given duration. false otherwise.

**异常**

- **UnsupportedOperationException** — If the underlying implementation cannot reasonably process the request, e.g. W3C XML Schema allows for arbitrarily large/small/precise values, the request may be beyond the implementations capability.
- **NullPointerException** — If `duration` is null.

**参见**

- #isShorterThan(Duration)
- #compare(Duration duration)
