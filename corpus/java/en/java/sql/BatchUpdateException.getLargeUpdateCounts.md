---
id: "java-en-function-batchupdateexception-getlargeupdatecounts"
language: "java"
lang: "en"
category: "function"
name: "BatchUpdateException.getLargeUpdateCounts"
signature: "public long[] getLargeUpdateCounts()"
title: "BatchUpdateException.getLargeUpdateCounts"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/BatchUpdateException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BatchUpdateException.getLargeUpdateCounts

```java
public long[] getLargeUpdateCounts()
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
 

 This method should be used when `Statement.executeLargeBatch` is
 invoked and the returned update count may exceed `MAX_VALUE`.

**返回**

- an array of `long` containing the update counts for the updates that were executed successfully before this error occurred.  Or, if the driver continues to process commands after an error, one of the following for every command in the batch:   - an update count  - `Statement.SUCCESS_NO_INFO` to indicate that the command executed successfully but the number of rows affected is unknown  - `Statement.EXECUTE_FAILED` to indicate that the command failed to execute successfully

> *Since 1.8*
