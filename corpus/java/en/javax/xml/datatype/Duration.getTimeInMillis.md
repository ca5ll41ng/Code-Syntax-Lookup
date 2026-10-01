---
id: "java-en-function-duration-gettimeinmillis"
language: "java"
lang: "en"
category: "function"
name: "Duration.getTimeInMillis"
signature: "public long getTimeInMillis(final Calendar startInstant)"
title: "Duration.getTimeInMillis"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.getTimeInMillis

```java
public long getTimeInMillis(final Calendar startInstant)
```

Returns the length of the duration in milli-seconds.

 

If the seconds field carries more digits than milli-second order,
 those will be simply discarded (or in other words, rounded to zero.)
 For example, for any Calendar value `x`,
 
```

 `new Duration("PT10.00099S").getTimeInMills(x) == 10000`
 `new Duration("-PT10.00099S").getTimeInMills(x) == -10000`
 
```

 

 Note that this method uses the `addTo` method,
 which may work incorrectly with `Duration` objects with
 very large values in its fields. See the `addTo`
 method for details.

**参数**

- **startInstant** — The length of a month/year varies. The `startInstant` is used to disambiguate this variance. Specifically, this method returns the difference between `startInstant` and `startInstant+duration`

**返回**

- milliseconds between `startInstant` and `startInstant` plus this `Duration`

**异常**

- **NullPointerException** — if `startInstant` parameter is null.
