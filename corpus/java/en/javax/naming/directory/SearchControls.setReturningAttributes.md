---
id: "java-en-function-searchcontrols-setreturningattributes"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.setReturningAttributes"
signature: "public void setReturningAttributes(String[] attrs)"
title: "SearchControls.setReturningAttributes"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.setReturningAttributes

```java
public void setReturningAttributes(String[] attrs)
```

Specifies the attributes that will be returned as part of the search.

 null indicates that all attributes will be returned.
 An empty array indicates no attributes are returned.

**参数**

- **attrs** — An array of attribute ids identifying the attributes that will be returned. Can be null.

**参见**

- #getReturningAttributes
