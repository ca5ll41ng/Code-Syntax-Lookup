---
id: "java-en-function-javax-sql-rowsetmetadata"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.RowSetMetaData"
title: "RowSetMetaData"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetMetaData

An object that contains information about the columns in a
 `RowSet` object.  This interface is
 an extension of the `ResultSetMetaData` interface with
 methods for setting the values in a `RowSetMetaData` object.
 When a `RowSetReader` object reads data into a `RowSet`
 object, it creates a `RowSetMetaData` object and initializes it
 using the methods in the `RowSetMetaData` interface.  Then the
 reader passes the `RowSetMetaData` object to the rowset.
 

 The methods in this interface are invoked internally when an application
 calls the method `RowSet.execute`; an application
 programmer would not use them directly.

> *Since 1.4*
