---
id: "java-en-function-java-lang-module-modulefinder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleFinder"
title: "ModuleFinder"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleFinder

A finder of modules. A `ModuleFinder` is used to find modules during
 resolution or
 service binding.

 

 A `ModuleFinder` can only find one module with a given name. A
 `ModuleFinder` that finds modules in a sequence of directories, for
 example, will locate the first occurrence of a module of a given name and
 will ignore other modules of that name that appear in directories later in
 the sequence. 

 

 Example usage: 

 {@snippet :
     Path dir1 = ..., dir2 = ..., dir3 = ...;
     ModuleFinder finder = ModuleFinder.of(dir1, dir2, dir3);
     Optional omref = finder.find("jdk.foo");
     omref.ifPresent(mref -> ... );
 }

 

 The `find(String) find` and `findAll() findAll` methods
 defined here can fail for several reasons. These include I/O errors, errors
 detected parsing a module descriptor (`module-info.class`), or in the
 case of `ModuleFinder` returned by `of ModuleFinder.of`, that
 two or more modules with the same name are found in a directory.
 When an error is detected then these methods throw `FindException
 FindException` with an appropriate `getCause cause`.
 The behavior of a `ModuleFinder` after a `FindException` is
 thrown is undefined. For example, invoking `find` after an exception
 is thrown may or may not scan the same modules that lead to the exception.
 It is recommended that a module finder be discarded after an exception is
 thrown. 

 

 A `ModuleFinder` is not required to be thread safe.

> *Since 9*
