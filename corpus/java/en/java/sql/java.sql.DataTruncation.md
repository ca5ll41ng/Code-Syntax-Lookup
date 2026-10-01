---
id: "java-en-function-java-sql-datatruncation"
language: "java"
lang: "en"
category: "function"
name: "java.sql.DataTruncation"
title: "DataTruncation"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/DataTruncation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataTruncation

An exception  thrown as a `DataTruncation` exception
 (on writes) or reported as a
 `DataTruncation` warning (on reads)
  when a data values is unexpectedly truncated for reasons other than its having
  exceeded `MaxFieldSize`.

 

The SQLstate for a `DataTruncation` during read is `01004`.
 

The SQLstate for a `DataTruncation` during write is `22001`.

> *Since 1.1*
