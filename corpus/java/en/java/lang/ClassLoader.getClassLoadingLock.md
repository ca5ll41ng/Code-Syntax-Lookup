---
id: "java-en-function-classloader-getclassloadinglock"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getClassLoadingLock"
signature: "protected Object getClassLoadingLock(String className)"
title: "ClassLoader.getClassLoadingLock"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getClassLoadingLock

```java
protected Object getClassLoadingLock(String className)
```

Returns the lock object for class loading operations.

 If this `ClassLoader` object is registered as parallel capable,
 this method returns a dedicated object associated with the specified
 class name. Otherwise, this method returns this `ClassLoader` object.

 This method allows parallel capable class loaders to implement
 finer-grained locking schemes such that multiple threads may load classes
 concurrently without deadlocks.  For non-parallel-capable class loaders,
 the `ClassLoader` object is synchronized on during the class loading
 operations.  Class loaders with non-hierarchical delegation should be
 `registerAsParallelCapable() registered as parallel capable`
 to prevent deadlocks.

**参数**

- **className** — The name of the to-be-loaded class

**返回**

- the lock for class loading operations

**异常**

- **NullPointerException** — If registered as parallel capable and `className` is `null`

**参见**

- #loadClass(String, boolean)

> *Since 1.7*
