---
id: "java-en-function-datatypefactory-newduration"
language: "java"
lang: "en"
category: "function"
name: "DatatypeFactory.newDuration"
signature: "public abstract Duration newDuration(final String lexicalRepresentation)"
title: "DatatypeFactory.newDuration"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/DatatypeFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatatypeFactory.newDuration

```java
public abstract Duration newDuration(final String lexicalRepresentation)
```

Obtain a new instance of a `Duration`
 specifying the `Duration` as its string representation, "PnYnMnDTnHnMnS",
 as defined in XML Schema 1.0 section 3.2.6.1.

 

XML Schema Part 2: Datatypes, 3.2.6 duration, defines `duration` as:
 
 duration represents a duration of time.
 The value space of duration is a six-dimensional space where the coordinates designate the
 Gregorian year, month, day, hour, minute, and second components defined in Section 5.5.3.2 of [ISO 8601], respectively.
 These components are ordered in their significance by their order of appearance i.e. as
 year, month, day, hour, minute, and second.
 
 

All six values are set and available from the created `Duration`

 

The XML Schema specification states that values can be of an arbitrary size.
 Implementations may chose not to or be incapable of supporting arbitrarily large and/or small values.
 An `UnsupportedOperationException` will be thrown with a message indicating implementation limits
 if implementation capacities are exceeded.

**参数**

- **lexicalRepresentation** — `String` representation of a `Duration`.

**返回**

- New `Duration` created from parsing the `lexicalRepresentation`.

**异常**

- **IllegalArgumentException** — If `lexicalRepresentation` is not a valid representation of a `Duration`.
- **UnsupportedOperationException** — If implementation cannot support requested values.
- **NullPointerException** — if `lexicalRepresentation` is `null`.
