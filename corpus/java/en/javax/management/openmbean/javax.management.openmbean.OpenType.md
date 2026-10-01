---
id: "java-en-function-javax-management-openmbean-opentype"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.OpenType"
title: "OpenType"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenType

The OpenType class is the parent abstract class of all classes which describe the actual open type
 of open data values.
 

 An open type is defined by:
 
  
- the fully qualified Java class name of the open data values this type describes;
      note that only a limited set of Java classes is allowed for open data values
      (see `ALLOWED_CLASSNAMES_LIST ALLOWED_CLASSNAMES_LIST`),
  
- its name,
  
- its description.

**参数**

- **the** — Java type that instances described by this type must have.  For example, `INTEGER` is a `SimpleType` which is a subclass of `OpenType`, meaning that an attribute, parameter, or return value that is described as a `SimpleType.INTEGER` must have Java type `Integer`.

> *Since 1.5*
