---
id: "java-en-function-java-sql-sqlfeaturenotsupportedexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLFeatureNotSupportedException"
title: "SQLFeatureNotSupportedException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLFeatureNotSupportedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLFeatureNotSupportedException

The subclass of `SQLException` thrown when the SQLState class value is '0A'
 ( the value is 'zero' A).
 This indicates that the JDBC driver does not support an optional JDBC feature.
 Optional JDBC features can fall into the following categories:

- no support for an optional feature

- no support for an optional overloaded method

- no support for an optional mode for a method.  The mode for a method is
determined based on constants passed as parameter values to a method

> *Since 1.6*
