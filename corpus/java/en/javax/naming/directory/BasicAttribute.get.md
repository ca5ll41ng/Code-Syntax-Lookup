---
id: "java-en-function-basicattribute-get"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.get"
signature: "public Object get() throws NamingException"
title: "BasicAttribute.get"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.get

```java
public Object get() throws NamingException
```

Retrieves one of this attribute's values.

 By default, the value returned is one of those passed to the
 constructor and/or manipulated using the add/replace/remove methods.
 A subclass may override this to retrieve the value dynamically
 from the directory.
