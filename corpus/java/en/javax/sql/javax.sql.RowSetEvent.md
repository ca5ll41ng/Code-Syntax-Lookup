---
id: "java-en-function-javax-sql-rowsetevent"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.RowSetEvent"
title: "RowSetEvent"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetEvent

An `Event` object generated when an event occurs to a
 `RowSet` object.  A `RowSetEvent` object is
 generated when a single row in a rowset is changed, the whole rowset
 is changed, or the rowset cursor moves.
 

 When an event occurs on a `RowSet` object, one of the
 `RowSetListener` methods will be sent to all registered
 listeners to notify them of the event.  An `Event` object
 is supplied to the `RowSetListener` method so that the
 listener can use it to find out which `RowSet` object is
 the source of the event.

> *Since 1.4*
