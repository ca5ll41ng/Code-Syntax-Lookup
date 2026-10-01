---
id: "java-en-function-java-nio-file-attribute-dosfileattributes"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.DosFileAttributes"
title: "DosFileAttributes"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/DosFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DosFileAttributes

File attributes associated with a file in a file system that supports
 legacy "DOS" attributes.

 

 **Usage Example:**
 {@snippet lang=java :
     Path file = ...
     DosFileAttributes attrs = Files.readAttributes(file, DosFileAttributes.class);
 }

> *Since 1.7*
