---
id: "java-en-function-batchupdateexception-getupdatecounts"
language: "java"
lang: "en"
category: "function"
name: "BatchUpdateException.getUpdateCounts"
signature: "public int[] getUpdateCounts()"
title: "BatchUpdateException.getUpdateCounts"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/BatchUpdateException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BatchUpdateException.getUpdateCounts

```java
public int[] getUpdateCounts()
```

Retrieves the update count for each update statement in the batch
 update that executed successfully before this exception occurred.
 A driver that implements batch updates may or may not continue to
 process the remaining commands in a batch when one of the commands
 fails to execute properly. If the driver continues processing commands,
 the array returned by this method will have as many elements as
 there are commands in the batch; otherwise, it will contain an
 update count for each command that executed successfully before
 the `BatchUpdateException` was thrown.
 

 The possible return values for this method were modified for
 the Java 2 SDK, Standard Edition, version 1.3.  This was done to
 accommodate the new option of continuing to process commands
 in a batch update after a `BatchUpdateException` object
 has been thrown.

**返回**

- an array of `int` containing the update counts for the updates that were executed successfully before this error occurred.  Or, if the driver continues to process commands after an error, one of the following for every command in the batch:   - an update count  - `Statement.SUCCESS_NO_INFO` to indicate that the command executed successfully but the number of rows affected is unknown  - `Statement.EXECUTE_FAILED` to indicate that the command failed to execute successfully

**参见**

- #getLargeUpdateCounts()

> *Since 1.3*
