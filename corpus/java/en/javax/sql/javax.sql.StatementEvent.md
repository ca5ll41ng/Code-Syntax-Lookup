---
id: "java-en-function-javax-sql-statementevent"
language: "java"
lang: "en"
category: "function"
name: "javax.sql.StatementEvent"
title: "StatementEvent"
directive: "type"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/StatementEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StatementEvent

A `StatementEvent` is sent to all `StatementEventListener`s which were
 registered with a `PooledConnection`. This occurs when the driver determines that a
 `PreparedStatement` that is associated with the `PooledConnection` has been closed or the driver determines
 is invalid.

> *Since 1.6*
