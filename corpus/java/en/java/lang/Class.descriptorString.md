---
id: "java-en-function-class-descriptorstring"
language: "java"
lang: "en"
category: "function"
name: "Class.descriptorString"
signature: "public String descriptorString()"
title: "Class.descriptorString"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.descriptorString

```java
public String descriptorString()
```

Returns the descriptor string of the entity (class, interface, array class,
 primitive type, or `void`) represented by this `Class` object.

 

 If this `Class` object represents a class or interface,
 not an array class, then:
 
 
-  If the class or interface is not `isHidden() hidden`,
      then the result is a field descriptor (JVMS {@jvms 4.3.2})
      for the class or interface. Calling
      `ofDescriptor(String) ClassDesc::ofDescriptor`
      with the result descriptor string produces a `ClassDesc ClassDesc`
      describing this class or interface.
 
-  If the class or interface is `isHidden() hidden`,
      then the result is a string of the form:
      
      `"L" +` N `+ "." +  + ";"`
      
      where N is the `#binary-name binary name`
      encoded in internal form indicated by the `class` file passed to
      `defineHiddenClass(byte[], boolean, MethodHandles.Lookup.ClassOption...)
      Lookup::defineHiddenClass`, and `` is an unqualified name.
      A hidden class or interface has no `ClassDesc nominal descriptor`.
      The result string is not a type descriptor.
 

 

 If this `Class` object represents an array class, then
 the result is a string consisting of one or more '`[`' characters
 representing the depth of the array nesting, followed by the
 descriptor string of the element type.
 
 
-  If the element type is not a `isHidden() hidden` class
 or interface, then this array class can be described nominally.
 Calling `ofDescriptor(String) ClassDesc::ofDescriptor`
 with the result descriptor string produces a `ClassDesc ClassDesc`
 describing this array class.
 
-  If the element type is a `isHidden() hidden` class or
 interface, then this array class cannot be described nominally.
 The result string is not a type descriptor.
 

 

 If this `Class` object represents a primitive type or
 `void`, then the result is a field descriptor string which
 is a one-letter code corresponding to a primitive type or `void`
 (`"B", "C", "D", "F", "I", "J", "S", "Z", "V"`) (JVMS {@jvms 4.3.2}).

**返回**

- the descriptor string for this `Class` object

> *Since 12*
