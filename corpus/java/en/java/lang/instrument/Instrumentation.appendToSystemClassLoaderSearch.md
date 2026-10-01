---
id: "java-en-function-instrumentation-appendtosystemclassloadersearch"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.appendToSystemClassLoaderSearch"
signature: "void appendToSystemClassLoaderSearch(JarFile jarfile)"
title: "Instrumentation.appendToSystemClassLoaderSearch"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.appendToSystemClassLoaderSearch

```java
void appendToSystemClassLoaderSearch(JarFile jarfile)
```

Specifies a JAR file with instrumentation classes to be defined by the
 system class loader.

 When the system class loader for delegation (see
 `getSystemClassLoader getSystemClassLoader`)
 unsuccessfully searches for a class, the entries in the `java.util.jar.JarFile JarFile` will be searched as well.

 

 This method may be used multiple times to add multiple JAR files to be
 searched in the order that this method was invoked.

 

 The agent should take care to ensure that the JAR does not contain any
 classes or resources other than those to be defined by the system class
 loader for the purpose of instrumentation.
 Failure to observe this warning could result in unexpected
 behavior that is difficult to diagnose (see
 `appendToBootstrapClassLoaderSearch
 appendToBootstrapClassLoaderSearch`).

 

 The system class loader supports adding a JAR file to be searched if
 it implements a method named appendToClassPathForInstrumentation
 which takes a single parameter of type java.lang.String. The
 method is not required to have public access. The name of
 the JAR file is obtained by invoking the `getName
 getName` method on the jarfile and this is provided as the
 parameter to the appendToClassPathForInstrumentation method.

 

 The Java Virtual Machine Specification
 specifies that a subsequent attempt to resolve a symbolic
 reference that the Java virtual machine has previously unsuccessfully attempted
 to resolve always fails with the same error that was thrown as a result of the
 initial resolution attempt. Consequently, if the JAR file contains an entry
 that corresponds to a class for which the Java virtual machine has
 unsuccessfully attempted to resolve a reference, then subsequent attempts to
 resolve that reference will fail with the same error as the initial attempt.

 

 This method does not change the value of java.class.path
 `getProperties system property`.

**参数**

- **jarfile** — The JAR file to be searched when the system class loader unsuccessfully searches for a class.

**异常**

- **UnsupportedOperationException** — If the system class loader does not support appending a a JAR file to be searched.
- **NullPointerException** — If jarfile is null.

**参见**

- #appendToBootstrapClassLoaderSearch
- java.lang.ClassLoader#getSystemClassLoader
- java.util.jar.JarFile

> *Since 1.6*
