---
id: "java-en-function-javax-sql-connectionevent"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.ConnectionEvent"
title: "ConnectionEvent"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/ConnectionEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConnectionEvent

An `Event` object that provides information about the
 source of a connection-related event.  `ConnectionEvent`
 objects are generated when an application closes a pooled connection
 and when an error occurs.  The `ConnectionEvent` object
 contains two kinds of information:
 
   
- The pooled connection closed by the application
   
- In the case of an error event, the `SQLException`
       about to be thrown to the application

> *Since 1.4*
