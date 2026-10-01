---
id: "java-en-function-sqlclientinfoexception-getfailedproperties"
language: "java"
lang: "en"
category: "function"
name: "SQLClientInfoException.getFailedProperties"
signature: "public Map<String, ClientInfoStatus> getFailedProperties()"
title: "SQLClientInfoException.getFailedProperties"
directive: "method"
module: "java.sql/java.sql"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/SQLClientInfoException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SQLClientInfoException.getFailedProperties

```java
public Map<String, ClientInfoStatus> getFailedProperties()
```

Returns the list of client info properties that could not be set.  The
 keys in the Map  contain the names of the client info
 properties that could not be set and the values contain one of the
 reason codes defined in `ClientInfoStatus`

**返回**

- Map list containing the client info properties that could not be set

> *Since 1.6*
