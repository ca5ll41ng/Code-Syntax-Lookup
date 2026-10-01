---
id: "java-en-function-searchcontrols-getreturningattributes"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.getReturningAttributes"
signature: "public String[] getReturningAttributes()"
title: "SearchControls.getReturningAttributes"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.getReturningAttributes

```java
public String[] getReturningAttributes()
```

Retrieves the attributes that will be returned as part of the search.

 A value of null indicates that all attributes will be returned.
 An empty array indicates that no attributes are to be returned.

**返回**

- An array of attribute ids identifying the attributes that will be returned. Can be null.

**参见**

- #setReturningAttributes
