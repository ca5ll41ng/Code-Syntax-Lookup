---
id: "java-en-function-datatypefactory-newdurationyearmonth"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newDurationYearMonth"
signature: "public Duration newDurationYearMonth( final String lexicalRepresentation)"
title: "DatatypeFactory.newDurationYearMonth"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newDurationYearMonth

```java
public Duration newDurationYearMonth( final String lexicalRepresentation)
```

Create a `Duration` of type `xdt:yearMonthDuration`
 by parsing its `String` representation,
 "PnYnM", 
   XQuery 1.0 and XPath 2.0 Data Model, xdt:yearMonthDuration.

 

The datatype `xdt:yearMonthDuration` is a subtype of `xs:duration`
 whose lexical representation contains only year and month components.
 This datatype resides in the namespace `W3C_XPATH_DATATYPE_NS_URI`.

 

Both values are set and available from the created `Duration`

 

The XML Schema specification states that values can be of an arbitrary size.
 Implementations may chose not to or be incapable of supporting
 arbitrarily large and/or small values. An `UnsupportedOperationException`
 will be thrown with a message indicating implementation limits
 if implementation capacities are exceeded.

**参数**

- **lexicalRepresentation** — Lexical representation of a duration.

**返回**

- New `Duration` created using the specified `lexicalRepresentation`.

**异常**

- **IllegalArgumentException** — If `lexicalRepresentation` is not a valid representation of a `Duration` expressed only in terms of years and months.
- **UnsupportedOperationException** — If implementation cannot support requested values.
- **NullPointerException** — If `lexicalRepresentation` is `null`.
