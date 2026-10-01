---
id: "java-en-function-basicattribute-getall"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.getAll"
signature: "public NamingEnumeration<?> getAll() throws NamingException"
title: "BasicAttribute.getAll"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.getAll

```java
public NamingEnumeration<?> getAll() throws NamingException
```

Retrieves an enumeration of this attribute's values.

 By default, the values returned are those passed to the
 constructor and/or manipulated using the add/replace/remove methods.
 A subclass may override this to retrieve the values dynamically
 from the directory.
