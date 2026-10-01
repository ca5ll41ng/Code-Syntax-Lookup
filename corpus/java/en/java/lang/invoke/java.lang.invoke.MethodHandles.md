---
id: "java-en-function-java-lang-invoke-methodhandles"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.MethodHandles"
title: "MethodHandles"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles

This class consists exclusively of static methods that operate on or return
 method handles. They fall into several categories:
 
 
- Lookup methods which help create method handles for methods and fields.
 
- Combinator methods, which combine or transform pre-existing method handles into new ones.
 
- Other factory methods to create method handles that emulate other common JVM operations or control flow patterns.
 

 A lookup, combinator, or factory method will fail and throw an
 `IllegalArgumentException` if the created method handle's type
 would have too many parameters.

> *Since 1.7*
