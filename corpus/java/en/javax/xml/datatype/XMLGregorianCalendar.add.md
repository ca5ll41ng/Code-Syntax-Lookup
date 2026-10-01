---
id: "java-en-function-xmlgregoriancalendar-add"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.add"
signature: "public abstract void add(Duration duration)"
title: "XMLGregorianCalendar.add"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.add

```java
public abstract void add(Duration duration)
```

Add `duration` to this instance.

 

The computation is specified in
 XML Schema 1.0 Part 2, Appendix E,
 Adding durations to dateTimes.
 date/time field mapping table
 defines the mapping from XML Schema 1.0 `dateTime` fields
 to this class' representation of those fields.

**参数**

- **duration** — Duration to add to this `XMLGregorianCalendar`.

**异常**

- **NullPointerException** — when `duration` parameter is `null`.
