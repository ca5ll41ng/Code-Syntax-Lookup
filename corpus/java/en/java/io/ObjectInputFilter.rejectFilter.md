---
id: "java-en-function-objectinputfilter-rejectfilter"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputFilter.rejectFilter"
signature: "static ObjectInputFilter rejectFilter(Predicate<Class<?>> predicate, Status otherStatus)"
title: "ObjectInputFilter.rejectFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputFilter.rejectFilter

```java
static ObjectInputFilter rejectFilter(Predicate<Class<?>> predicate, Status otherStatus)
```

Returns a filter that returns `Status.REJECTED` if the predicate
 on the class is `true`.
 The filter returns `REJECTED` or the `otherStatus` based on the predicate
 of the `non-null` class and `UNDECIDED` if the class is `null`.

 When the filter's `checkInput checkInput` method is invoked,
 the predicate is applied to the `serialClass`,
 the return Status is:
 
     
- `UNDECIDED UNDECIDED`, if the `serialClass` is `null`,
     
- `REJECTED REJECTED`, if the predicate on the class returns `true`,
     
- Otherwise, return `otherStatus`.
 

 

 Example, to create a filter that will reject any class loaded from the application classloader.
 {@snippet lang="java":
     ObjectInputFilter f = rejectFilter(cl ->
          cl.getClassLoader() == ClassLoader.ClassLoader.getSystemClassLoader(), Status.UNDECIDED);
 }

**参数**

- **predicate** — a predicate to test a non-null Class
- **otherStatus** — a Status to use if the predicate is `false`

**返回**

- returns a filter that returns `REJECTED` if the predicate on the class is `true`

> *Since 17*
