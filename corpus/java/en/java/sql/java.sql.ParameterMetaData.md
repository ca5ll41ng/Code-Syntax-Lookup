---
id: "java-en-function-java-sql-parametermetadata"
language: "java"
lang: "en"
category: "function"
name: "java.sql.ParameterMetaData"
title: "ParameterMetaData"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ParameterMetaData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterMetaData

An object that can be used to get information about the types
 and properties for each parameter marker in a
 `PreparedStatement` object. For some queries and driver
 implementations, the data that would be returned by a `ParameterMetaData`
 object may not be available until the `PreparedStatement` has
 been executed.

Some driver implementations may not be able to provide information about the
types and properties for each parameter marker in a `CallableStatement`
object.

> *Since 1.4*
