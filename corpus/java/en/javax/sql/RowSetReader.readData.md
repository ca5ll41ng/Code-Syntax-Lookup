---
id: "java-en-function-rowsetreader-readdata"
language: "java"
lang: "en"
category: "function"
name: "RowSetReader.readData"
signature: "void readData(RowSetInternal caller) throws SQLException"
title: "RowSetReader.readData"
directive: "method"
module: "java.sql/javax.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/RowSetReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RowSetReader.readData

```java
void readData(RowSetInternal caller) throws SQLException
```

Reads the new contents of the calling `RowSet` object.
 In order to call this method, a `RowSet`
 object must have implemented the `RowSetInternal` interface
 and registered this `RowSetReader` object as its reader.
 The `readData`  method is invoked internally
 by the `RowSet.execute` method for rowsets that support the
 reader/writer paradigm.

 

The `readData` method adds rows to the caller.
 It can be implemented in a wide variety of ways and can even
 populate the caller with rows from a nonrelational data source.
 In general, a reader may invoke any of the rowset's methods,
 with one exception. Calling the method `execute` will
 cause an `SQLException` to be thrown
 because `execute` may not be called recursively.  Also,
 when a reader invokes `RowSet` methods, no listeners
 are notified; that is, no `RowSetEvent` objects are
 generated and no `RowSetListener` methods are invoked.
 This is true because listeners are already being notified by the method
 `execute`.

**参数**

- **caller** — the `RowSet` object (1) that has implemented the `RowSetInternal` interface, (2) with which this reader is registered, and (3) whose `execute` method called this reader

**异常**

- **SQLException** — if a database access error occurs or this method invokes the `RowSet.execute` method
