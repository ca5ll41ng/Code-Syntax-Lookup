---
id: "java-en-function-statement-enquotencharliteral"
language: "java"
lang: "en"
category: "function"
name: "Statement.enquoteNCharLiteral"
signature: "default String enquoteNCharLiteral(String val) throws SQLException"
title: "Statement.enquoteNCharLiteral"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.enquoteNCharLiteral

```java
default String enquoteNCharLiteral(String val) throws SQLException
```

Returns a `String` representing a National Character Set Literal
 enclosed in single quotes and prefixed with a upper case letter N.
 Any occurrence of a single quote within the string will be replaced
 by two single quotes.

 
 
 Examples of the conversion:
 
 
 Value
 Result
 
 
 
  Hello N'Hello' 
  G'Day N'G''Day' 
  'G''Day'
 N'''G''''Day''' 
  I'''M N'I''''''M'
  N'Hello' N'N''Hello''' 

 
 
 
 The default implementation creates the literal as:
 `"N'" + val.replace("'", "''") + "'"`.
 JDBC driver implementations may need to provide their own implementation
 of this method in order to meet the requirements of the underlying
 datasource. An implementation of enquoteNCharLiteral may accept a different
 set of characters than that accepted by the same drivers implementation of
 enquoteLiteral.

**参数**

- **val** — a character string

**返回**

- the result of replacing every single quote character in the argument by two single quote characters where this entire result is then prefixed with 'N'.

**异常**

- **NullPointerException** — if val is `null`
- **SQLException** — if a database access error occurs

> *Since 9*
