---
id: "java-en-function-objectinputfilter-allowfilter"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputFilter.allowFilter"
signature: "static ObjectInputFilter allowFilter(Predicate<Class<?>> predicate, Status otherStatus)"
title: "ObjectInputFilter.allowFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter.allowFilter

```java
static ObjectInputFilter allowFilter(Predicate<Class<?>> predicate, Status otherStatus)
```

Returns a filter that returns `Status.ALLOWED` if the predicate
 on the class is `true`.
 The filter returns `ALLOWED` or the `otherStatus` based on the predicate
 of the `non-null` class and `UNDECIDED` if the class is `null`.

 

When the filter's `checkInput checkInput` method is invoked,
 the predicate is applied to the `serialClass`,
 the return Status is:
 
     
- `UNDECIDED UNDECIDED`, if the `serialClass` is `null`,
     
- `ALLOWED ALLOWED`, if the predicate on the class returns `true`,
     
- Otherwise, return `otherStatus`.
 

 

 Example, to create a filter that will allow any class loaded from the platform
 or bootstrap classloaders.
 {@snippet lang="java":
     ObjectInputFilter f
         = allowFilter(cl -> cl.getClassLoader() == ClassLoader.getPlatformClassLoader() ||
                       cl.getClassLoader() == null, Status.UNDECIDED);
 }

**参数**

- **predicate** — a predicate to test a non-null Class
- **otherStatus** — a Status to use if the predicate is `false`

**返回**

- a filter that returns `ALLOWED` if the predicate on the class is `true`

> *Since 17*
