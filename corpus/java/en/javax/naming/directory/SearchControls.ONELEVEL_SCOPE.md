---
id: "java-en-function-searchcontrols-onelevel_scope"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.ONELEVEL_SCOPE"
signature: "public static final int ONELEVEL_SCOPE = 1"
title: "SearchControls.ONELEVEL_SCOPE"
directive: "field"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.ONELEVEL_SCOPE

```java
public static final int ONELEVEL_SCOPE = 1
```

Search one level of the named context.

 The NamingEnumeration that results from search()
 using ONELEVEL_SCOPE contains elements with
 objects in the named context that satisfy
 the search filter specified in search().
 The names of elements in the NamingEnumeration are atomic names
 relative to the named context.
 

 The value of this constant is `1`.
