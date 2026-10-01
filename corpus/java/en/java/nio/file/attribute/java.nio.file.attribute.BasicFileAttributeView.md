---
id: "java-en-function-java-nio-file-attribute-basicfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.BasicFileAttributeView"
title: "BasicFileAttributeView"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributeView

A file attribute view that provides a view of a basic set of file
 attributes common to many file systems. The basic set of file attributes
 consist of mandatory and optional file attributes as
 defined by the `BasicFileAttributes` interface.

 

 The file attributes are retrieved from the file system as a bulk
 operation by invoking the `readAttributes() readAttributes` method.
 This class also defines the `setTimes setTimes` method to update the
 file's time attributes.

 

 Where dynamic access to file attributes is required, the attributes
 supported by this attribute view have the following names and types:
 
  
  Supported attributes
  
   
      Name 
      Type 
   
  
  
  
      "lastModifiedTime" 
      `FileTime` 
   
   
      "lastAccessTime" 
      `FileTime` 
   
   
      "creationTime" 
      `FileTime` 
   
   
      "size" 
      `Long` 
   
   
      "isRegularFile" 
      `Boolean` 
   
   
      "isDirectory" 
      `Boolean` 
   
   
      "isSymbolicLink" 
      `Boolean` 
   
   
      "isOther" 
      `Boolean` 
   
   
      "fileKey" 
      `Object` 
   
 
 
 

 

 The `getAttribute getAttribute` method may be
 used to read any of these attributes as if by invoking the `readAttributes` method.

 

 The `setAttribute setAttribute` method may be
 used to update the file's last modified time, last access time or create time
 attributes as if by invoking the `setTimes setTimes` method.

> *Since 1.7*
