---
id: "java-en-function-xmlgregoriancalendar-settime"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.setTime"
signature: "public void setTime(int hour, int minute, int second)"
title: "XMLGregorianCalendar.setTime"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.setTime

```java
public void setTime(int hour, int minute, int second)
```

Set time as one unit.

**参数**

- **hour** — value constraints are summarized in hour field of date/time field mapping table.
- **minute** — value constraints are summarized in minute field of date/time field mapping table.
- **second** — value constraints are summarized in second field of date/time field mapping table.

**异常**

- **IllegalArgumentException** — if any parameter is outside value constraints for the field as specified in date/time field mapping table.

**参见**

- #setTime(int, int, int, BigDecimal)
