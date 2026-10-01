---
id: "java-en-function-java-sql-batchupdateexception"
language: "java"
lang: "en"
category: "function"
name: "java.sql.BatchUpdateException"
title: "BatchUpdateException"
directive: "type"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/BatchUpdateException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BatchUpdateException

The subclass of `SQLException` thrown when an error
 occurs during a batch update operation.  In addition to the
 information provided by `SQLException`, a
 `BatchUpdateException` provides the update
 counts for all commands that were executed successfully during the
 batch update, that is, all commands that were executed before the error
 occurred.  The order of elements in an array of update counts
 corresponds to the order in which commands were added to the batch.
 

 After a command in a batch update fails to execute properly
 and a `BatchUpdateException` is thrown, the driver
 may or may not continue to process the remaining commands in
 the batch.  If the driver continues processing after a failure,
 the array returned by the method
 `BatchUpdateException.getUpdateCounts` will have
 an element for every command in the batch rather than only
 elements for the commands that executed successfully before
 the error.  In the case where the driver continues processing
 commands, the array element for any command
 that failed is `Statement.EXECUTE_FAILED`.
 

 A JDBC driver implementation should use
 the constructor `BatchUpdateException(String reason, String SQLState,
 int vendorCode, long []updateCounts, Throwable cause) ` instead of
 constructors that take `int[]` for the update counts to avoid the
 possibility of overflow.
 

 If `Statement.executeLargeBatch` method is invoked it is recommended that
 `getLargeUpdateCounts` be called instead of `getUpdateCounts`
 in order to avoid a possible overflow of the integer update count.

> *Since 1.2*
