---
id: "java-en-function-rowset-execute"
language: "java"
lang: "en"
category: "function"
name: "RowSet.execute"
signature: "void execute() throws SQLException"
title: "RowSet.execute"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSet.execute

```java
void execute() throws SQLException
```

Fills this `RowSet` object with data.
 

 The `execute` method may use the following properties
 to create a connection for reading data: url, data source name,
 user name, password, transaction isolation, and type map.

 The `execute` method  may use the following properties
 to create a statement to execute a command:
 command, read only, maximum field size,
 maximum rows, escape processing, and query timeout.
 

 If the required properties have not been set, an exception is
 thrown.  If this method is successful, the current contents of the rowset are
 discarded and the rowset's metadata is also (re)set.  If there are
 outstanding updates, they are ignored.
 

 If this `RowSet` object does not maintain a continuous connection
 with its source of data, it may use a `Reader` (a `RowSetReader`
 object) to fill itself with data.  In this case, a `Reader` will have been
 registered with this `RowSet` object, and the method
 `execute` will call on the `Reader`'s `readData`
 method as part of its implementation.

**异常**

- **SQLException** — if a database access error occurs or any of the properties necessary for making a connection and creating a statement have not been set
