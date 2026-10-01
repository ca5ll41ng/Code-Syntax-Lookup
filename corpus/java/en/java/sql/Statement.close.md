---
id: "java-en-function-statement-close"
language: "java"
lang: "en"
category: "function"
name: "Statement.close"
signature: "void close() throws SQLException"
title: "Statement.close"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.close

```java
void close() throws SQLException
```

Releases this `Statement` object's database
 and JDBC resources immediately instead of waiting for
 this to happen when it is automatically closed.
 It is generally good practice to release resources as soon as
 you are finished with them to avoid tying up database
 resources.
 

 Calling the method `close` on a `Statement`
 object that is already closed has no effect.
 

 **Note:**When a `Statement` object is
 closed, its current `ResultSet` object, if one exists, is
 also closed.

**异常**

- **SQLException** — if a database access error occurs
