---
id: "java-en-function-batchupdateexception-batchupdateexception"
language: "java"
lang: "en"
category: "function"
name: "BatchUpdateException.BatchUpdateException"
signature: "public BatchUpdateException( String reason, String SQLState, int vendorCode, int[] updateCounts )"
title: "BatchUpdateException.BatchUpdateException"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/BatchUpdateException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BatchUpdateException.BatchUpdateException

```java
public BatchUpdateException( String reason, String SQLState, int vendorCode, int[] updateCounts )
```

Constructs a `BatchUpdateException` object initialized with a given
 `reason`, `SQLState`, `vendorCode` and
 `updateCounts`.
 The `cause` is not initialized, and may subsequently be
 initialized by a call to the
 `initCause` method.
 

 **Note:** There is no validation of `updateCounts` for
 overflow and because of this it is recommended that you use the constructor
 `BatchUpdateException(String reason, String SQLState,
 int vendorCode, long []updateCounts, Throwable cause) `.

**参数**

- **reason** — a description of the error
- **SQLState** — an XOPEN or SQL:2003 code identifying the exception
- **vendorCode** — an exception code used by a particular database vendor
- **updateCounts** — an array of `int`, with each element indicating the update count, `Statement.SUCCESS_NO_INFO` or `Statement.EXECUTE_FAILED` for each SQL command in the batch for JDBC drivers that continue processing after a command failure; an update count or `Statement.SUCCESS_NO_INFO` for each SQL command in the batch prior to the failure for JDBC drivers that stop processing after a command failure

**参见**

- #BatchUpdateException(java.lang.String, java.lang.String, int, long[], java.lang.Throwable)

> *Since 1.2*
