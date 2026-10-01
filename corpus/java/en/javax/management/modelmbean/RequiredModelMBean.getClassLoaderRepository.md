---
id: "java-en-function-requiredmodelmbean-getclassloaderrepository"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.getClassLoaderRepository"
signature: "protected ClassLoaderRepository getClassLoaderRepository()"
title: "RequiredModelMBean.getClassLoaderRepository"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.getClassLoaderRepository

```java
protected ClassLoaderRepository getClassLoaderRepository()
```

Return the Class Loader Repository used to perform class loading.
 Subclasses may wish to redefine this method in order to return
 the appropriate `javax.management.loading.ClassLoaderRepository`
 that should be used in this object.

**返回**

- the Class Loader Repository.
