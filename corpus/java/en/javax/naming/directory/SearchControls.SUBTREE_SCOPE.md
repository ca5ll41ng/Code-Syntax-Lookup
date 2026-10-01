---
id: "java-en-function-searchcontrols-subtree_scope"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.SUBTREE_SCOPE"
signature: "public static final int SUBTREE_SCOPE = 2"
title: "SearchControls.SUBTREE_SCOPE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.SUBTREE_SCOPE

```java
public static final int SUBTREE_SCOPE = 2
```

Search the entire subtree rooted at the named object.

 If the named object is not a DirContext, search only the object.
 If the named object is a DirContext, search the subtree
 rooted at the named object, including the named object itself.

 The search will not cross naming system boundaries.

 The NamingEnumeration that results from search()
 using SUBTREE_SCOPE contains elements of objects
 from the subtree (including the named context)
 that satisfy the search filter specified in search().
 The names of elements in the NamingEnumeration are either
 relative to the named context or is a URL string.
 If the named context satisfies the search filter, it is
 included in the enumeration with the empty string as
 its name.
 

 The value of this constant is `2`.
