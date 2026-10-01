---
id: "java-en-function-resultset-fetch_reverse"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.FETCH_REVERSE"
signature: "int FETCH_REVERSE = 1001"
title: "ResultSet.FETCH_REVERSE"
directive: "field"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.FETCH_REVERSE

```java
int FETCH_REVERSE = 1001
```

The constant indicating that the rows in a result set will be
 processed in a reverse direction; last-to-first.
 This constant is used by the method `setFetchDirection`
 as a hint to the driver, which the driver may ignore.

> *Since 1.2*
