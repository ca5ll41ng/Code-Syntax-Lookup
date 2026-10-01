---
id: "java-en-function-java-sql-sqlclientinfoexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.SQLClientInfoException"
title: "SQLClientInfoException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLClientInfoException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLClientInfoException

The subclass of `SQLException` is thrown when one or more client info properties
 could not be set on a `Connection`.  In addition to the information provided
 by `SQLException`, a `SQLClientInfoException` provides a list of client info
 properties that were not set.

 Some databases do not allow multiple client info properties to be set
 atomically.  For those databases, it is possible that some of the client
 info properties had been set even though the `Connection.setClientInfo`
 method threw an exception.  An application can use the `getFailedProperties`
 method to retrieve a list of client info properties that were not set.  The
 properties are identified by passing a
 `Map` to
 the appropriate `SQLClientInfoException` constructor.

**参见**

- ClientInfoStatus
- Connection#setClientInfo

> *Since 1.6*
