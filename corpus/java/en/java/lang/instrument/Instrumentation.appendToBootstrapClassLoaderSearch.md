---
id: "java-en-function-instrumentation-appendtobootstrapclassloadersearch"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.appendToBootstrapClassLoaderSearch"
signature: "void appendToBootstrapClassLoaderSearch(JarFile jarfile)"
title: "Instrumentation.appendToBootstrapClassLoaderSearch"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.appendToBootstrapClassLoaderSearch

```java
void appendToBootstrapClassLoaderSearch(JarFile jarfile)
```

Specifies a JAR file with instrumentation classes to be defined by the
 bootstrap class loader.

 

 When the virtual machine's built-in class loader, known as the "bootstrap
 class loader", unsuccessfully searches for a class, the entries in the `java.util.jar.JarFile JAR file` will be searched as well.

 

 This method may be used multiple times to add multiple JAR files to be
 searched in the order that this method was invoked.

 

 The agent should take care to ensure that the JAR does not contain any
 classes or resources other than those to be defined by the bootstrap
 class loader for the purpose of instrumentation.
 Failure to observe this warning could result in unexpected
 behavior that is difficult to diagnose. For example, suppose there is a
 loader L, and L's parent for delegation is the bootstrap class loader.
 Furthermore, a method in class C, a class defined by L, makes reference to
 a non-public accessor class C$1. If the JAR file contains a class C$1 then
 the delegation to the bootstrap class loader will cause C$1 to be defined
 by the bootstrap class loader. In this example an IllegalAccessError
 will be thrown that may cause the application to fail. One approach to
 avoiding these types of issues, is to use a unique package name for the
 instrumentation classes.

 

 The Java Virtual Machine Specification
 specifies that a subsequent attempt to resolve a symbolic
 reference that the Java virtual machine has previously unsuccessfully attempted
 to resolve always fails with the same error that was thrown as a result of the
 initial resolution attempt. Consequently, if the JAR file contains an entry
 that corresponds to a class for which the Java virtual machine has
 unsuccessfully attempted to resolve a reference, then subsequent attempts to
 resolve that reference will fail with the same error as the initial attempt.

**参数**

- **jarfile** — The JAR file to be searched when the bootstrap class loader unsuccessfully searches for a class.

**异常**

- **NullPointerException** — If jarfile is null.

**参见**

- #appendToSystemClassLoaderSearch
- java.lang.ClassLoader
- java.util.jar.JarFile

> *Since 1.6*
