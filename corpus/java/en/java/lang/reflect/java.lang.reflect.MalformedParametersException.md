---
id: "java-en-function-java-lang-reflect-malformedparametersexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.MalformedParametersException"
title: "MalformedParametersException"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/MalformedParametersException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MalformedParametersException

Thrown when `getParameters the
 java.lang.reflect package` attempts to read method parameters from
 a class file and determines that one or more parameters are
 malformed.

 

The following is a list of conditions under which this exception
 can be thrown:
 
 
-  The number of parameters (parameter_count) is wrong for the method
 
-  A constant pool index is out of bounds.
 
-  A constant pool index does not refer to a UTF-8 entry
 
-  A parameter's name is "", or contains an illegal character
 
-  The flags field contains an illegal flag (something other than
     FINAL, SYNTHETIC, or MANDATED)
 

 See `getParameters` for more
 information.

**参见**

- java.lang.reflect.Executable#getParameters

> *Since 1.8*
