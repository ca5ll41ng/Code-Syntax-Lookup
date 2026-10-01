---
id: "java-en-function-javax-sql-rowsetreader"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.RowSetReader"
title: "RowSetReader"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetReader

The facility that a disconnected `RowSet` object calls on
 to populate itself with rows of data. A reader (an object implementing the
 `RowSetReader` interface) may be registered with
 a `RowSet` object that supports the reader/writer paradigm.
 When the `RowSet` object's `execute` method is
 called, it in turn calls the reader's `readData` method.

> *Since 1.4*
