---
id: "java-en-function-searchresult-tostring"
language: "java"
lang: "en"
category: "function"
name: "SearchResult.toString"
signature: "public String toString()"
title: "SearchResult.toString"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchResult.toString

```java
public String toString()
```

Generates the string representation of this SearchResult.
 The string representation consists of the string representation
 of the binding and the string representation of
 this search result's attributes, separated by ':'.
 The contents of this string is useful
 for debugging and is not meant to be interpreted programmatically.

**返回**

- The string representation of this SearchResult. Cannot be null.
