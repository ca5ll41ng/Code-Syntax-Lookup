---
id: "java-en-function-searchcontrols-searchcontrols"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.SearchControls"
signature: "public SearchControls()"
title: "SearchControls.SearchControls"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.SearchControls

```java
public SearchControls()
```

Constructs a search constraints using defaults.

 The defaults are:
 
 
- search one level
 
- no maximum return limit for search results
 
- no time limit for search
 
- return all attributes associated with objects that satisfy
   the search filter.
 
- do not return named object  (return only name and class)
 
- do not dereference links during search
