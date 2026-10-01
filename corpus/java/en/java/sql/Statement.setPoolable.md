---
id: "java-en-function-statement-setpoolable"
language: "java"
lang: "en"
category: "function"
name: "Statement.setPoolable"
signature: "void setPoolable(boolean poolable) throws SQLException"
title: "Statement.setPoolable"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.setPoolable

```java
void setPoolable(boolean poolable) throws SQLException
```

Requests that a `Statement` be pooled or not pooled.  The value
 specified is a hint to the statement pool implementation indicating
 whether the application wants the statement to be pooled.  It is up to
 the statement pool manager as to whether the hint is used.
 

 The poolable value of a statement is applicable to both internal
 statement caches implemented by the driver and external statement caches
 implemented by application servers and other applications.
 

 By default, a `Statement` is not poolable when created, and
 a `PreparedStatement` and `CallableStatement`
 are poolable when created.

**参数**

- **poolable** — requests that the statement be pooled if true and that the statement not be pooled if false

**异常**

- **SQLException** — if this method is called on a closed `Statement`

> *Since 1.6*
