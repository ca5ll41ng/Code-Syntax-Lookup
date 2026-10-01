---
id: "java-en-function-java-sql-array"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Array"
title: "Array"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array

The mapping in the Java programming language for the SQL type
 `ARRAY`.
 By default, an `Array` value is a transaction-duration
 reference to an SQL `ARRAY` value.  By default, an `Array`
 object is implemented using an SQL LOCATOR(array) internally, which
 means that an `Array` object contains a logical pointer
 to the data in the SQL `ARRAY` value rather
 than containing the `ARRAY` value's data.
 

 The `Array` interface provides methods for bringing an SQL
 `ARRAY` value's data to the client as either an array or a
 `ResultSet` object.
 If the elements of the SQL `ARRAY`
 are a UDT, they may be custom mapped.  To create a custom mapping,
 a programmer must do two things:
 
 
- create a class that implements the `SQLData`
 interface for the UDT to be custom mapped.
 
- make an entry in a type map that contains
   
   
- the fully-qualified SQL type name of the UDT
   
- the `Class` object for the class implementing
       `SQLData`
   

 

 

 When a type map with an entry for
 the base type is supplied to the methods `getArray`
 and `getResultSet`, the mapping
 it contains will be used to map the elements of the `ARRAY` value.
 If no type map is supplied, which would typically be the case,
 the connection's type map is used by default.
 If the connection's type map or a type map supplied to a method has no entry
 for the base type, the elements are mapped according to the standard mapping.
 

 To release resources used by the `Array` object, applications must call
 either the `free` or the `close` method.  Any attempt to
 invoke a method other than `free` or `close` after the
 `Array` object has been closed, will result in a `SQLException`
 being thrown.
 

 All methods on the `Array` interface must be fully implemented if the
 JDBC driver supports the data type.

> *Since 1.2*
