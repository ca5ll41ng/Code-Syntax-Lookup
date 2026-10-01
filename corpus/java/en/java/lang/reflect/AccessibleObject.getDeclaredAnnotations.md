---
id: "java-en-function-accessibleobject-getdeclaredannotations"
language: "java"
lang: "en"
category: "function"
name: "AccessibleObject.getDeclaredAnnotations"
signature: "public Annotation[] getDeclaredAnnotations()"
title: "AccessibleObject.getDeclaredAnnotations"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AccessibleObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessibleObject.getDeclaredAnnotations

```java
public Annotation[] getDeclaredAnnotations()
```

{@inheritDoc}

 

 Note that any annotations returned by this method are
 declaration annotations.

 The default implementation throws `UnsupportedOperationException`; subclasses should override this method.

> *Since 1.5*
