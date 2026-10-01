---
id: "java-en-function-java-nio-file-attribute-basicfileattributes"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.BasicFileAttributes"
title: "BasicFileAttributes"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes

Basic attributes associated with a file in a file system.

 

 Basic file attributes are attributes that are common to many file systems
 and consist of mandatory and optional file attributes as defined by this
 interface.

 

 **Usage Example:**
 {@snippet lang=java :
     Path file = ...
     BasicFileAttributes attrs = Files.readAttributes(file, BasicFileAttributes.class);
 }

**参见**

- BasicFileAttributeView

> *Since 1.7*
