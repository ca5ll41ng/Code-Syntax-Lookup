---
id: "java-en-function-duration-isset"
language: "java"
lang: "en"
category: "function"
name: "Duration.isSet"
signature: "public abstract boolean isSet(final DatatypeConstants.Field field)"
title: "Duration.isSet"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.isSet

```java
public abstract boolean isSet(final DatatypeConstants.Field field)
```

Checks if a field is set.

 A field of a duration object may or may not be present.
 This method can be used to test if a field is present.

**参数**

- **field** — one of the six Field constants (YEARS,MONTHS,DAYS,HOURS, MINUTES, or SECONDS.)

**返回**

- true if the field is present. false if not.

**异常**

- **NullPointerException** — If the field parameter is null.
