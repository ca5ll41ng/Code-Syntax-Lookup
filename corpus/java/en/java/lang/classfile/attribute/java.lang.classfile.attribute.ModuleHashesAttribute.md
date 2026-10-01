---
id: "java-en-function-java-lang-classfile-attribute-modulehashesattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModuleHashesAttribute"
title: "ModuleHashesAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleHashesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleHashesAttribute

Models the `moduleHashes() ModuleHashes` attribute, which
 appears on classes that `isModuleInfo() represent`
 module descriptors to capture the hashes of a set of co-delivered modules.
 

 The specification of the `ModuleHashes` attribute is:
 
```
 `ModuleHashes_attribute {
   // index to CONSTANT_utf8_info structure in constant pool representing
   // the string "ModuleHashes"
   u2 attribute_name_index;
   u4 attribute_length;

   // index to CONSTANT_utf8_info structure with algorithm name
   u2 algorithm_index;

   // the number of entries in the hashes table
   u2 hashes_count;
   {   u2 module_name_index (index to CONSTANT_Module_info structure)
       u2 hash_length;
       u1 hash[hash_length];
   ` hashes[hashes_count];

 }
 } 
```

 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute is not predefined in the Java SE Platform.  This is a
 JDK-specific nonstandard attribute produced by the `jdk.jlink` module,
 which defines the `jlink` and `jmod` tools.

**参见**

- Attributes#moduleHashes()
- ModuleResolutionAttribute
- ModuleTargetAttribute

> *Since 24*
