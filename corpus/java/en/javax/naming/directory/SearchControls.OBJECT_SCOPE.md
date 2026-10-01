---
id: "java-en-function-searchcontrols-object_scope"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.OBJECT_SCOPE"
signature: "public static final int OBJECT_SCOPE = 0"
title: "SearchControls.OBJECT_SCOPE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.OBJECT_SCOPE

```java
public static final int OBJECT_SCOPE = 0
```

Search the named object.

 The NamingEnumeration that results from search()
 using OBJECT_SCOPE will contain one or zero element.
 The enumeration contains one element if the named object satisfies
 the search filter specified in search().
 The element will have as its name the empty string because the names
 of elements in the NamingEnumeration are relative to the
 target context--in this case, the target context is the named object.
 It contains zero element if the named object does not satisfy
 the search filter specified in search().
 

 The value of this constant is `0`.
