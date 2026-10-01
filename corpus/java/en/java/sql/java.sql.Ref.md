---
id: "java-en-function-java-sql-ref"
language: "java"
lang: "en"
category: "function"
name: "java.sql.Ref"
title: "Ref"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Ref.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Ref

The mapping in the Java programming language of an SQL `REF`
 value, which is a reference to an SQL structured type value in the database.
 

 SQL `REF` values are stored in a table that contains
 instances of a referenceable SQL structured type, and each `REF`
 value is a unique identifier for one instance in that table.
 An SQL `REF` value may be used in place of the
 SQL structured type it references, either as a column value in a
 table or an attribute value in a structured type.
 

 Because an SQL `REF` value is a logical pointer to an
 SQL structured type, a `Ref` object is by default also a logical
 pointer. Thus, retrieving an SQL `REF` value as
 a `Ref` object does not materialize
 the attributes of the structured type on the client.
 

 A `Ref` object can be stored in the database using the
 `PreparedStatement.setRef` method.
 

 All methods on the `Ref` interface must be fully implemented if the
 JDBC driver supports the data type.

**参见**

- Struct

> *Since 1.2*
