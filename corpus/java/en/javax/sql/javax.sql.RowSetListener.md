---
id: "java-en-function-javax-sql-rowsetlistener"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.RowSetListener"
title: "RowSetListener"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetListener

An interface that must be implemented by a
 component that wants to be notified when a significant
 event happens in the life of a `RowSet` object.
 A component becomes a listener by being registered with a
 `RowSet` object via the method `RowSet.addRowSetListener`.
 How a registered component implements this interface determines what it does
 when it is notified of an event.

> *Since 1.4*
