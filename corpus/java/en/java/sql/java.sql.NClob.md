---
id: "java-en-function-java-sql-nclob"
language: "java"
lang: "en"
category: "function"
name: "java.sql.NClob"
title: "NClob"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/NClob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NClob

The mapping in the Java programming language
 for the SQL `NCLOB` type.
 An SQL `NCLOB` is a built-in type
 that stores a Character Large Object using the National Character Set
  as a column value in a row of  a database table.
 

 The `NClob` interface extends the `Clob` interface
 which provides methods for getting the
 length of an SQL `NCLOB` value,
 for materializing a `NCLOB` value on the client, and for
 searching for a substring or `NCLOB` object within a
 `NCLOB` value. A `NClob` object, just like a `Clob` object, is valid for the duration
 of the transaction in which it was created.
 Methods in the interfaces `ResultSet`,
 `CallableStatement`, and `PreparedStatement`, such as
 `getNClob` and `setNClob` allow a programmer to
 access an SQL `NCLOB` value.  In addition, this interface
 has methods for updating a `NCLOB` value.
 

 To release resources used by the `NClob` object, applications must call
 either the `free` or the `close` method.  Any attempt to
 invoke a method other than `free` or `close` after the
 `NClob` object has been closed, will result in a `SQLException`
 being thrown.
 

 All methods on the `NClob` interface must be fully implemented if the
 JDBC driver supports the data type.

> *Since 1.6*
