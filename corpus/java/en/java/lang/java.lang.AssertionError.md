---
id: "java-en-function-java-lang-assertionerror"
language: "java"
lang: "en"
category: "function"
name: "java.lang.AssertionError"
title: "AssertionError"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AssertionError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AssertionError

Thrown to indicate that an assertion has failed.

 

The seven one-argument public constructors provided by this
 class ensure that the assertion error returned by the invocation:
 
```

     new AssertionError(expression)
 
```

 has as its detail message the string conversion of
 expression (as defined in section {@jls 5.1.11} of
 The Java Language Specification),
 regardless of the type of expression.

> *Since 1.4*
