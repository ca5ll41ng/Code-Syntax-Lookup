---
id: "java-en-function-java-io-invalidclassexception"
language: "java"
lang: "en"
category: "function"
name: "java.io.InvalidClassException"
title: "InvalidClassException"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InvalidClassException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvalidClassException

Thrown when the Serialization runtime detects one of the following
 problems with a Class.
 
 
- The serial version of the class does not match that of the class
     descriptor read from the stream
 
- The class contains unknown datatypes
 
- The class does not have an accessible no-arg constructor
 
- The ObjectStreamClass of an enum constant does not represent
     an enum type
 
- The class declares or inherits any strictly-initialized instance field
 
- A `isValue value class` cannot be serialized
 
-  Other conditions given in the Java Object Serialization
      Specification

> *Since 1.1*
