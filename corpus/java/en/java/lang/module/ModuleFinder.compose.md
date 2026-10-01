---
id: "java-en-function-modulefinder-compose"
language: "java"
lang: "en"
category: "function"
name: "ModuleFinder.compose"
signature: "static ModuleFinder compose(ModuleFinder... finders)"
title: "ModuleFinder.compose"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder.compose

```java
static ModuleFinder compose(ModuleFinder... finders)
```

Returns a module finder that is composed from a sequence of zero or more
 module finders. The `find(String) find` method of the resulting
 module finder will locate a module by invoking the `find` method
 of each module finder, in array index order, until either the module is
 found or all module finders have been searched. The `findAll()
 findAll` method of the resulting module finder will return a set of
 modules that includes all modules located by the first module finder.
 The set of modules will include all modules located by the second or
 subsequent module finder that are not located by previous module finders
 in the sequence.

 

 When locating modules then any exceptions or errors thrown by the
 `find` or `findAll` methods of the underlying module finders
 will be propagated to the caller of the resulting module finder's
 `find` or `findAll` methods.

**参数**

- **finders** — The array of module finders

**返回**

- A `ModuleFinder` that composes a sequence of module finders
