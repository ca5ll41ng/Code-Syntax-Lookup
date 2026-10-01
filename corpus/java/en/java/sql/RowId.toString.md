---
id: "java-en-function-rowid-tostring"
language: "java"
lang: "en"
category: "function"
name: "RowId.toString"
signature: "String toString()"
title: "RowId.toString"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/RowId.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowId.toString

```java
String toString()
```

Returns a String representing the value of the SQL ROWID designated by this
 `java.sql.RowId` object.
 

Like `java.sql.Date.toString()`
 returns the contents of its DATE as the `String` "2004-03-17"
 rather than as  DATE literal in SQL (which would have been the `String`
 DATE "2004-03-17"), toString()
 returns the contents of its ROWID in a form specific to the driver supplying
 the connection, and possibly not as a `ROWID` literal.

**返回**

- a String whose format is determined by the driver supplying the connection, representing the value of the `ROWID` designated by this `java.sql.RowId`  object.
