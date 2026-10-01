---
id: "java-en-function-xmlgregoriancalendar-gettimezone"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.getTimezone"
signature: "public abstract int getTimezone()"
title: "XMLGregorianCalendar.getTimezone"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.getTimezone

```java
public abstract int getTimezone()
```

Returns the Timezone offset in minutes or
 `FIELD_UNDEFINED` if this optional field is not defined.

 

Value constraints for this value are summarized in
 timezone field of date/time field mapping table.

**返回**

- The Timezone offset in minutes of this `XMLGregorianCalendar`.

**参见**

- #setTimezone(int)
