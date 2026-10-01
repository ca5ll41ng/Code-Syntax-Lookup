---
id: "java-en-function-java-sql-sqloutput"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLOutput"
title: "SQLOutput"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLOutput

The output stream for writing the attributes of a user-defined
 type back to the database.  This interface, used
 only for custom mapping, is used by the driver, and its
 methods are never directly invoked by a programmer.
 

When an object of a class implementing the interface
 `SQLData` is passed as an argument to an SQL statement, the
 JDBC driver calls the method `SQLData.getSQLType` to
 determine the  kind of SQL
 datum being passed to the database.
 The driver then creates an instance of `SQLOutput` and
 passes it to the method `SQLData.writeSQL`.
 The method `writeSQL` in turn calls the
 appropriate `SQLOutput` writer methods
 `writeBoolean`, `writeCharacterStream`, and so on)
 to write data from the `SQLData` object to
 the `SQLOutput` output stream as the
 representation of an SQL user-defined type.

> *Since 1.2*
