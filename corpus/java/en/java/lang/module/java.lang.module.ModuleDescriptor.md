---
id: "java-en-function-java-lang-module-moduledescriptor"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleDescriptor"
title: "ModuleDescriptor"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleDescriptor

A module descriptor.

 

 A module descriptor describes a named module and defines methods to
 obtain each of its components. The module descriptor for a named module
 in the Java virtual machine is obtained by invoking the `java.lang.Module Module`'s `getDescriptor
 getDescriptor` method. Module descriptors can also be created using the
 `ModuleDescriptor.Builder` class or by reading the binary form of a
 module declaration (`module-info.class`) using the `read(InputStream,Supplier) read` methods defined here. 

 

 A module descriptor describes a normal, open, or automatic
 module. Normal modules and open modules describe their `requires() dependences`, `exports() exported-packages`, the services
 that they `uses() use` or `provides() provide`, and other
 components. Normal modules may `opens() open` specific
 packages. The module descriptor for an open module does not declare any
 open packages (its `opens` method returns an empty set) but when
 instantiated in the Java virtual machine then it is treated as if all
 packages are open. The module descriptor for an automatic module does not
 declare any dependences (except for the mandatory dependency on `java.base`), and does not declare any exported or open packages. Automatic
 modules receive special treatment during resolution so that they read all
 other modules in the configuration. When an automatic module is instantiated
 in the Java virtual machine then it reads every unnamed module and is
 treated as if all packages are exported and open. 

 

 `ModuleDescriptor` objects are immutable and safe for use by
 multiple concurrent threads.

**参见**

- java.lang.Module

> *Since 9*
