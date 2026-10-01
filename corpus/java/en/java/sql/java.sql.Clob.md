---
id: "java-en-function-java-sql-clob"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Clob"
title: "Clob"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Clob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clob

The mapping in the Java programming language
 for the SQL `CLOB` type.
 An SQL `CLOB` is a built-in type
 that stores a Character Large Object as a column value in a row of
 a database table.
 By default, drivers implement a `Clob` object using an SQL
 `locator(CLOB)`, which means that a `Clob` object
 contains a logical pointer to the SQL `CLOB` data rather than
 the data itself. A `Clob` object is valid for the duration
 of the transaction in which it was created.
 

The `Clob` interface provides methods for getting the
 length of an SQL `CLOB` (Character Large Object) value,
 for materializing a `CLOB` value on the client, and for
 searching for a substring or `CLOB` object within a
 `CLOB` value.
 Methods in the interfaces `ResultSet`,
 `CallableStatement`, and `PreparedStatement`, such as
 `getClob` and `setClob` allow a programmer to
 access an SQL `CLOB` value.  In addition, this interface
 has methods for updating a `CLOB` value.
 

 To release resources used by the `Clob` object, applications must call
 either the `free` or the `close` method.  Any attempt to
 invoke a method other than `free` or `close` after the
 `Clob` object has been closed, will result in a `SQLException`
 being thrown.
 

 All methods on the `Clob` interface must be
 fully implemented if the JDBC driver supports the data type.

> *Since 1.2*
