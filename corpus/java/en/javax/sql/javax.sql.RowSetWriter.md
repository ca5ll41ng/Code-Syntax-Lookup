---
id: "java-en-function-javax-sql-rowsetwriter"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.RowSetWriter"
title: "RowSetWriter"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetWriter

An object that implements the `RowSetWriter` interface,
 called a writer. A writer may be registered with a `RowSet`
 object that supports the reader/writer paradigm.
 

 If a disconnected `RowSet` object modifies some of its data,
 and it has a writer associated with it, it may be implemented so that it
 calls on the writer's `writeData` method internally
 to write the updates back to the data source. In order to do this, the writer
 must first establish a connection with the rowset's data source.
 

 If the data to be updated has already been changed in the data source, there
 is a conflict, in which case the writer will not write
 the changes to the data source.  The algorithm the writer uses for preventing
 or limiting conflicts depends entirely on its implementation.

> *Since 1.4*
