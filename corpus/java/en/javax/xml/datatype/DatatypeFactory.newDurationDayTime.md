---
id: "java-en-function-datatypefactory-newdurationdaytime"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newDurationDayTime"
signature: "public Duration newDurationDayTime(final String lexicalRepresentation)"
title: "DatatypeFactory.newDurationDayTime"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newDurationDayTime

```java
public Duration newDurationDayTime(final String lexicalRepresentation)
```

Create a `Duration` of type `xdt:dayTimeDuration`
 by parsing its `String` representation,
 "PnDTnHnMnS", 
   XQuery 1.0 and XPath 2.0 Data Model, xdt:dayTimeDuration.

 

The datatype `xdt:dayTimeDuration` is a subtype of `xs:duration`
 whose lexical representation contains only day, hour, minute, and second components.
 This datatype resides in the namespace `http://www.w3.org/2003/11/xpath-datatypes`.

 

All four values are set and available from the created `Duration`

 

The XML Schema specification states that values can be of an arbitrary size.
 Implementations may chose not to or be incapable of supporting arbitrarily large and/or small values.
 An `UnsupportedOperationException` will be thrown with a message indicating implementation limits
 if implementation capacities are exceeded.

**参数**

- **lexicalRepresentation** — Lexical representation of a duration.

**返回**

- New `Duration` created using the specified `lexicalRepresentation`.

**异常**

- **IllegalArgumentException** — If `lexicalRepresentation` is not a valid representation of a `Duration` expressed only in terms of days and time.
- **UnsupportedOperationException** — If implementation cannot support requested values.
- **NullPointerException** — If `lexicalRepresentation` is `null`.
