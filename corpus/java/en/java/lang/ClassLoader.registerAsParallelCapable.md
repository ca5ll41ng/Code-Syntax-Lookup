---
id: "java-en-function-classloader-registerasparallelcapable"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.registerAsParallelCapable"
signature: "protected static boolean registerAsParallelCapable()"
title: "ClassLoader.registerAsParallelCapable"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.registerAsParallelCapable

```java
protected static boolean registerAsParallelCapable()
```

Registers the caller as
 `isRegisteredAsParallelCapable() parallel capable`.
 The registration succeeds if and only if all of the following
 conditions are met:
 
 
-  no instance of the caller has been created
 
-  all of the super classes (except class Object) of the caller are
 registered as parallel capable
 

 

Note that once a class loader is registered as parallel capable, there
 is no way to change it back.
 

 In cases where this method is called from a context where the caller is
 not a subclass of `ClassLoader` or there is no caller frame on the
 stack (e.g. when called directly from a JNI attached thread),
 `IllegalCallerException` is thrown.

**返回**

- `true` if the caller is successfully registered as parallel capable and `false` if otherwise.

**异常**

- **IllegalCallerException** — if the caller is not a subclass of `ClassLoader`

**参见**

- #isRegisteredAsParallelCapable()

> *Since 1.7*
