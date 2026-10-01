---
id: "java-en-function-java-sql-blob"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Blob"
title: "Blob"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Blob.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Blob

The representation (mapping) in
 the Java programming language of an SQL
 `BLOB` value.  An SQL `BLOB` is a built-in type
 that stores a Binary Large Object as a column value in a row of
 a database table. By default, drivers implement `Blob` using
 an SQL `locator(BLOB)`, which means that a
 `Blob` object contains a logical pointer to the
 SQL `BLOB` data rather than the data itself.
 A `Blob` object is valid for the duration of the
 transaction in which is was created.

 

Methods in the interfaces `ResultSet`,
 `CallableStatement`, and `PreparedStatement`, such as
 `getBlob` and `setBlob` allow a programmer to
 access an SQL `BLOB` value.
 The `Blob` interface provides methods for getting the
 length of an SQL `BLOB` (Binary Large Object) value,
 for materializing a `BLOB` value on the client, and for
 determining the position of a pattern of bytes within a
 `BLOB` value. In addition, this interface has methods for updating
 a `BLOB` value.
 

 To release resources used by the `Blob` object, applications must call
 either the `free` or the `close` method.  Any attempt to
 invoke a method other than `free` or `close` after the
 `Blob` object has been closed, will result in a `SQLException`
 being thrown.
 

 All methods on the `Blob` interface must be fully implemented if the
 JDBC driver supports the data type.

> *Since 1.2*
