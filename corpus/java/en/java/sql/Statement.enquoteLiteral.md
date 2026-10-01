---
id: "java-en-function-statement-enquoteliteral"
language: "java"
lang: "en"
category: "function"
name: "Statement.enquoteLiteral"
signature: "default String enquoteLiteral(String val) throws SQLException"
title: "Statement.enquoteLiteral"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.enquoteLiteral

```java
default String enquoteLiteral(String val) throws SQLException
```

Returns a `String` enclosed in single quotes. Any occurrence of a
 single quote within the string will be replaced by two single quotes.

 
 
 Examples of the conversion:
 
 ValueResult
 
 
  Hello 'Hello' 
  G'Day 'G''Day' 
  'G''Day'
 '''G''''Day''' 
  I'''M 'I''''''M'
 

 
 
 
 The default implementation creates the literal as:
 `"'" + val.replace("'", "''") + "'"`.
 JDBC driver implementations may need to provide their own implementation
 of this method in order to meet the requirements of the underlying
 datasource.

**参数**

- **val** — a character string

**返回**

- A string enclosed by single quotes with every single quote converted to two single quotes

**异常**

- **NullPointerException** — if val is `null`
- **SQLException** — if a database access error occurs

> *Since 9*
