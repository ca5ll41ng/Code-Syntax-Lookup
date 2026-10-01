---
id: "java-en-function-java-lang-classcastexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ClassCastException"
title: "ClassCastException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassCastException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassCastException

Thrown to indicate that the code has attempted to cast an object
 to a subclass of which it is not an instance. For example, the
 following code generates a `ClassCastException`:
 
```

     Object x = Integer.valueOf(0);
     System.out.println((String)x);
 
```

> *Since 1.0*
