---
id: "java-en-function-java-sql-time"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Time"
title: "Time"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Time.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Time

A thin wrapper around the `java.util.Date` class that allows the JDBC
 API to identify this as an SQL `TIME` value. The `Time`
 class adds formatting and
 parsing operations to support the JDBC escape syntax for time
 values.
 

The date components should be set to the "zero epoch"
 value of January 1, 1970 and should not be accessed.

> *Since 1.1*
