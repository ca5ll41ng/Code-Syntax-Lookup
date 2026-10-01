---
id: "java-en-function-java-lang-module-modulereader"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleReader"
title: "ModuleReader"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader

Provides access to the content of a module.

 

 A module reader is intended for cases where access to the resources in a
 module is required, regardless of whether the module has been loaded.
 A framework that scans a collection of packaged modules on the file system,
 for example, may use a module reader to access a specific resource in each
 module. A module reader is also intended to be used by `ClassLoader`
 implementations that load classes and resources from modules. 

 

 A resource in a module is identified by an abstract name that is a
 '`/`'-separated path string. For example, module `java.base` may
 have a resource "`java/lang/Object.class`" that, by convention, is the
 class file for `java.lang.Object`. A module reader may treat
 directories in the module content as resources (whether it does or not is
 module reader specific). Where the module content contains a directory
 that can be located as a resource then its name ends with a slash ('/'). The
 directory can also be located with a name that drops the trailing slash. 

 

 A `ModuleReader` is `open open` upon
 creation and is closed by invoking the `close close` method.  Failure
 to close a module reader may result in a resource leak.  The `try-with-resources` statement provides a useful construct to ensure that
 module readers are closed. 

 when translating an abstract resource name to the location of a resource in
 a packaged module or on the file system. Implementations are advised to
 treat resource names with elements such as '`.`,  '`..`',
 elements containing file separators, or empty elements as "not found". More
 generally, if the resource name is not in the stream of elements that the
 `list` method returns then the resource should be treated as "not
 found" to avoid inconsistencies.

**参见**

- ModuleReference

> *Since 9*
