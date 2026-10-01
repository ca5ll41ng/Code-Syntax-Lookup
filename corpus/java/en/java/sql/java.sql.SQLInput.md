---
id: "java-en-function-java-sql-sqlinput"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLInput"
title: "SQLInput"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLInput

An input stream that contains a stream of values representing an
 instance of an SQL structured type or an SQL distinct type.
 This interface, used only for custom mapping, is used by the driver
 behind the scenes, and a programmer never directly invokes
 `SQLInput` methods. The reader methods
 (`readLong`, `readBytes`, and so on)
 provide a way  for an implementation of the `SQLData`
  interface to read the values in an `SQLInput` object.
  And as described in `SQLData`, calls to reader methods must
 be made in the order that their corresponding attributes appear in the
 SQL definition of the type.
 The method `wasNull` is used to determine whether
 the last value read was SQL `NULL`.
 

When the method `getObject` is called with an
 object of a class implementing the interface `SQLData`,
 the JDBC driver calls the method `SQLData.getSQLType`
 to determine the SQL type of the user-defined type (UDT)
 being custom mapped. The driver
 creates an instance of `SQLInput`, populating it with the
 attributes of the UDT.  The driver then passes the input
 stream to the method `SQLData.readSQL`, which in turn
 calls the `SQLInput` reader methods
 in its implementation for reading the
 attributes from the input stream.

> *Since 1.2*
