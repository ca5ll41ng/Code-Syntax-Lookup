---
id: "java-en-function-java-sql-timestamp"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Timestamp"
title: "Timestamp"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Timestamp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timestamp

A thin wrapper around `java.util.Date` that allows
 the JDBC API to identify this as an SQL `TIMESTAMP` value.
 It adds the ability
 to hold the SQL `TIMESTAMP` fractional seconds value, by allowing
 the specification of fractional seconds to a precision of nanoseconds.
 A Timestamp also provides formatting and
 parsing operations to support the JDBC escape syntax for timestamp values.

 

The precision of a Timestamp object is calculated to be either:
 
 
- `19 `, which is the number of characters in yyyy-mm-dd hh:mm:ss
 
-  `20 + s `, which is the number
 of characters in the yyyy-mm-dd hh:mm:ss.[fff...] and `s` represents  the scale of the given Timestamp,
 its fractional seconds precision.

 

**Note:** This type is a composite of a `java.util.Date` and a
 separate nanoseconds value. Only integral seconds are stored in the
 `java.util.Date` component. The fractional seconds - the nanos - are
 separate.  The `Timestamp.equals(Object)` method never returns
 `true` when passed an object
 that isn't an instance of `java.sql.Timestamp`,
 because the nanos component of a date is unknown.
 As a result, the `Timestamp.equals(Object)`
 method is not symmetric with respect to the
 `java.util.Date.equals(Object)` method.
 

 Due to the differences between the `Timestamp` class
 and the `java.util.Date`
 class mentioned above, it is recommended that code not view
 `Timestamp` values generically as an instance of
 `java.util.Date`.  The
 inheritance relationship between `Timestamp`
 and `java.util.Date` really
 denotes implementation inheritance, and not type inheritance.

> *Since 1.1*
