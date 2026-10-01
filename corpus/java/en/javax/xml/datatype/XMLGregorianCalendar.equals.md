---
id: "java-en-function-xmlgregoriancalendar-equals"
language: "java"
lang: "en"
category: "function"
name: "XMLGregorianCalendar.equals"
signature: "public boolean equals(Object obj)"
title: "XMLGregorianCalendar.equals"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/XMLGregorianCalendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLGregorianCalendar.equals

```java
public boolean equals(Object obj)
```

Compares this calendar to the specified object. The result is
 `true` if and only if the argument is not null and is an
 `XMLGregorianCalendar` object that represents the same
 instant in time as this object.

**参数**

- **obj** — to compare.

**返回**

- `true` when `obj` is an instance of `XMLGregorianCalendar` and `compare` returns `EQUAL`, otherwise `false`.
