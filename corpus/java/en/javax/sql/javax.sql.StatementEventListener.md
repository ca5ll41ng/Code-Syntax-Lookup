---
id: "java-en-function-javax-sql-statementeventlistener"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.StatementEventListener"
title: "StatementEventListener"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/StatementEventListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StatementEventListener

An object that registers to be notified of events that occur on PreparedStatements
 that are in the Statement pool.
 

 The JDBC 3.0 specification added the maxStatements
 `ConnectionPooledDataSource` property to provide a standard mechanism for
 enabling the pooling of `PreparedStatements`
 and to specify the size of the statement
 pool.  However, there was no way for a driver to notify an external
 statement pool when a `PreparedStatement` becomes invalid.  For some databases, a
 statement becomes invalid if a DDL operation is performed that affects the
 table.  For example an application may create a temporary table to do some work
 on the table and then destroy it.  It may later recreate the same table when
 it is needed again.  Some databases will invalidate any prepared statements
 that reference the temporary table when the table is dropped.
 

 Similar to the methods defined in the `ConnectionEventListener` interface,
 the driver will call the `StatementEventListener.statementErrorOccurred`
 method prior to throwing any exceptions when it detects a statement is invalid.
 The driver will also call the `StatementEventListener.statementClosed`
 method when a `PreparedStatement` is closed.
 

 Methods which allow a component to register a StatementEventListener with a
 `PooledConnection` have been added to the `PooledConnection` interface.

> *Since 1.6*
