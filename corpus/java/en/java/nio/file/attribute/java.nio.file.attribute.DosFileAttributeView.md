---
id: "java-en-function-java-nio-file-attribute-dosfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.DosFileAttributeView"
title: "DosFileAttributeView"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/DosFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DosFileAttributeView

A file attribute view that provides a view of the legacy "DOS" file attributes.
 These attributes are supported by file systems such as the File Allocation
 Table (FAT) format commonly used in consumer devices.

 

 A `DosFileAttributeView` is a `BasicFileAttributeView` that
 additionally supports access to the set of DOS attribute flags that are used
 to indicate if the file is read-only, hidden, a system file, or archived.

 

 Where dynamic access to file attributes is required, the attributes
 supported by this attribute view are as defined by `BasicFileAttributeView`, and in addition, the following attributes are
 supported:
 
 
 Supported attributes
 
   
      Name 
      Type 
   
 
 
   
      readonly 
      `Boolean` 
   
   
      hidden 
      `Boolean` 
   
   
      system 
      `Boolean` 
   
   
      archive 
      `Boolean` 
   
 
 
 

 

 The `getAttribute getAttribute` method may
 be used to read any of these attributes, or any of the attributes defined by
 `BasicFileAttributeView` as if by invoking the `readAttributes
 readAttributes` method.

 

 The `setAttribute setAttribute` method may
 be used to update the file's last modified time, last access time or create
 time attributes as defined by `BasicFileAttributeView`. It may also be
 used to update the DOS attributes as if by invoking the `setReadOnly
 setReadOnly`, `setHidden setHidden`, `setSystem setSystem`, and
 `setArchive setArchive` methods respectively.

> *Since 1.7*
