---
id: "java-en-function-statement-executelargebatch"
language: "java"
lang: "en"
category: "function"
name: "Statement.executeLargeBatch"
signature: "default long[] executeLargeBatch() throws SQLException"
title: "Statement.executeLargeBatch"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.executeLargeBatch

```java
default long[] executeLargeBatch() throws SQLException
```

Submits a batch of commands to the database for execution and
 if all commands execute successfully, returns an array of update counts.
 The `long` elements of the array that is returned are ordered
 to correspond to the commands in the batch, which are ordered
 according to the order in which they were added to the batch.
 The elements in the array returned by the method `executeLargeBatch`
 may be one of the following:
 
 
- A number greater than or equal to zero -- indicates that the
 command was processed successfully and is an update count giving the
 number of rows in the database that were affected by the command's
 execution
 
- A value of `SUCCESS_NO_INFO` -- indicates that the command was
 processed successfully but that the number of rows affected is
 unknown
 

 If one of the commands in a batch update fails to execute properly,
 this method throws a `BatchUpdateException`, and a JDBC
 driver may or may not continue to process the remaining commands in
 the batch.  However, the driver's behavior must be consistent with a
 particular DBMS, either always continuing to process commands or never
 continuing to process commands.  If the driver continues processing
 after a failure, the array returned by the method
 `BatchUpdateException.getLargeUpdateCounts`
 will contain as many elements as there are commands in the batch, and
 at least one of the elements will be the following:

 
- A value of `EXECUTE_FAILED` -- indicates that the command failed
 to execute successfully and occurs only if a driver continues to
 process commands after a command fails
 

 

 This method should be used when the returned row count may exceed
 `MAX_VALUE`.

 The default implementation will throw `UnsupportedOperationException`

**返回**

- an array of update counts containing one element for each command in the batch.  The elements of the array are ordered according to the order in which commands were added to the batch.

**异常**

- **SQLException** — if a database access error occurs, this method is called on a closed `Statement` or the driver does not support batch statements. Throws `BatchUpdateException` (a subclass of `SQLException`) if one of the commands sent to the database fails to execute properly or attempts to return a result set.
- **SQLTimeoutException** — when the driver has determined that the timeout value that was specified by the `setQueryTimeout` method has been exceeded and has at least attempted to cancel the currently running `Statement`

**参见**

- #addBatch
- DatabaseMetaData#supportsBatchUpdates

> *Since 1.8*
