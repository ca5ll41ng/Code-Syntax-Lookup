---
id: "java-en-function-duration-getfield"
language: "java"
lang: "en"
category: "function"
name: "Duration.getField"
signature: "public abstract Number getField(final DatatypeConstants.Field field)"
title: "Duration.getField"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.getField

```java
public abstract Number getField(final DatatypeConstants.Field field)
```

Gets the value of a field.

 Fields of a duration object may contain arbitrary large value.
 Therefore this method is designed to return a `Number` object.

 In case of YEARS, MONTHS, DAYS, HOURS, and MINUTES, the returned
 number will be a non-negative integer. In case of seconds,
 the returned number may be a non-negative decimal value.

**参数**

- **field** — one of the six Field constants (YEARS,MONTHS,DAYS,HOURS, MINUTES, or SECONDS.)

**返回**

- If the specified field is present, this method returns a non-null non-negative `Number` object that represents its value. If it is not present, return null. For YEARS, MONTHS, DAYS, HOURS, and MINUTES, this method returns a `java.math.BigInteger` object. For SECONDS, this method returns a `java.math.BigDecimal`.

**异常**

- **NullPointerException** — If the `field` is `null`.
