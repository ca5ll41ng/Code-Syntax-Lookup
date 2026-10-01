---
id: "java-en-function-searchresult-searchresult"
language: "java"
lang: "en"
category: "function"
name: "SearchResult.SearchResult"
signature: "public SearchResult(String name, Object obj, Attributes attrs)"
title: "SearchResult.SearchResult"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchResult.SearchResult

```java
public SearchResult(String name, Object obj, Attributes attrs)
```

Constructs a search result using the result's name, its bound object, and
 its attributes.

 `getClassName()` will return the class name of `obj`
 (or null if `obj` is null) unless the class name has been
 explicitly set using `setClassName()`.

**参数**

- **name** — The non-null name of the search item. It is relative to the target context of the search (which is named by the first parameter of the search() method)
- **obj** — The object bound to name. Can be null.
- **attrs** — The attributes that were requested to be returned with this search item. Cannot be null.

**参见**

- javax.naming.NameClassPair#setClassName
- javax.naming.NameClassPair#getClassName
