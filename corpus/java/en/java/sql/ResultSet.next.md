---
id: "java-en-function-resultset-next"
language: "java"
lang: "en"
category: "function"
name: "ResultSet.next"
signature: "boolean next() throws SQLException"
title: "ResultSet.next"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/ResultSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResultSet.next

```java
boolean next() throws SQLException
```

Moves the cursor forward one row from its current position.
 A `ResultSet` cursor is initially positioned
 before the first row; the first call to the method
 `next` makes the first row the current row; the
 second call makes the second row the current row, and so on.
 

 When a call to the `next` method returns `false`,
 the cursor is positioned after the last row. Any
 invocation of a `ResultSet` method which requires a
 current row will result in a `SQLException` being thrown.
  If the result set type is `TYPE_FORWARD_ONLY`, it is vendor specified
 whether their JDBC driver implementation will return `false` or
  throw an `SQLException` on a
 subsequent call to `next`.

 

If an input stream is open for the current row, a call
 to the method `next` will
 implicitly close it. A `ResultSet` object's
 warning chain is cleared when a new row is read.

**返回**

- `true` if the new current row is valid; `false` if there are no more rows

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed result set
