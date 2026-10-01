---
id: "java-en-function-lazyconstant-tostring"
language: "java"
lang: "en"
category: "function"
name: "LazyConstant.toString"
signature: "String toString()"
title: "LazyConstant.toString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant.toString

```java
String toString()
```

{@return a string suitable for debugging}
 

 This method never triggers initialization of this lazy constant and will observe
 initialization by other threads atomically (i.e., it observes the
 content if and only if the initialization has already completed).
 

 If this lazy constant is initialized, an implementation-dependent string
 containing the `toString` of the
 content will be returned; otherwise, an implementation-dependent string is
 returned that indicates this lazy constant is not yet initialized.
