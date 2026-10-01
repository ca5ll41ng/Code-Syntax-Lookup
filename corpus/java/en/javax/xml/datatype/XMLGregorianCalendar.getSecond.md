---
id: "java-en-function-xmlgregoriancalendar-getsecond"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getSecond"
signature: "public abstract int getSecond()"
title: "XMLGregorianCalendar.getSecond"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getSecond

```java
public abstract int getSecond()
```

Returns the second of minute or
 `FIELD_UNDEFINED` if this field is not defined.
 When this field is not defined, the optional xs:dateTime
 fractional seconds field, represented by
 `getFractionalSecond` and `getMillisecond`,
 must not be defined.

 

Value constraints for this value are summarized in
 second field of date/time field mapping table.

**返回**

- The second of minute of this `XMLGregorianCalendar`,  from 0 to 59.

**参见**

- #getFractionalSecond()
- #getMillisecond()
- #setTime(int, int, int)
