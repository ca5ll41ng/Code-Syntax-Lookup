---
id: "java-en-function-statement-getmoreresults"
language: "java"
lang: "en"
category: "function"
name: "Statement.getMoreResults"
signature: "boolean getMoreResults() throws SQLException"
title: "Statement.getMoreResults"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/Statement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Statement.getMoreResults

```java
boolean getMoreResults() throws SQLException
```

Moves to this `Statement` object's next result, returns
 `true` if it is a `ResultSet` object, and
 implicitly closes any current `ResultSet`
 object(s) obtained with the method `getResultSet`.

 

There are no more results when the following is true:
 
```
`// stmt is a Statement object
     ((stmt.getMoreResults() == false) && (stmt.getUpdateCount() == -1))
 `
```

**返回**

- `true` if the next result is a `ResultSet` object; `false` if it is an update count or there are no more results

**异常**

- **SQLException** — if a database access error occurs or this method is called on a closed `Statement`

**参见**

- #execute
