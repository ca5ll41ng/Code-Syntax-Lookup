---
id: "java-en-function-java-lang-arraystoreexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ArrayStoreException"
title: "ArrayStoreException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ArrayStoreException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayStoreException

Thrown to indicate that an attempt has been made to store the
 wrong type of object into an array of objects. For example, the
 following code generates an `ArrayStoreException`:
 
```

     Object x[] = new String[3];
     x[0] = Integer.valueOf(0);
 
```

> *Since 1.0*
