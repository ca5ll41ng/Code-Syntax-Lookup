---
id: "java-en-function-resultset-fetch_unknown"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.FETCH_UNKNOWN"
signature: "int FETCH_UNKNOWN = 1002"
title: "ResultSet.FETCH_UNKNOWN"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.FETCH_UNKNOWN

```java
int FETCH_UNKNOWN = 1002
```

The constant indicating that the order in which rows in a
 result set will be processed is unknown.
 This constant is used by the method `setFetchDirection`
 as a hint to the driver, which the driver may ignore.
