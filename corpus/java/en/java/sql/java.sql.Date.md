---
id: "java-en-function-java-sql-date"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Date"
title: "Date"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date

A thin wrapper around a millisecond value that allows
 JDBC to identify this as an SQL `DATE` value.  A
 milliseconds value represents the number of milliseconds that
 have passed since January 1, 1970 00:00:00.000 GMT.
 

 To conform with the definition of SQL `DATE`, the
 millisecond values wrapped by a `java.sql.Date` instance
 must be 'normalized' by setting the
 hours, minutes, seconds, and milliseconds to zero in the particular
 time zone with which the instance is associated.

> *Since 1.1*
