---
id: "java-en-function-javax-sql-xaconnection"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.XAConnection"
title: "XAConnection"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/XAConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XAConnection

An object that provides support for distributed transactions. An
 `XAConnection` object may be enlisted in a distributed transaction
 by means of an `XAResource` object. A transaction manager, usually
 part of a middle tier server, manages an `XAConnection` object
 through the `XAResource` object.
 

 An application programmer does not use this interface directly; rather, it is
 used by a transaction manager working in the middle tier server.

> *Since 1.4*
