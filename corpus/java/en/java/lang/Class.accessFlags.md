---
id: "java-en-function-class-accessflags"
language: "java"
lang: "en"
category: "function"
name: "Class.accessFlags"
signature: "public Set<AccessFlag> accessFlags()"
title: "Class.accessFlags"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.accessFlags

```java
public Set<AccessFlag> accessFlags()
```

{@return an unmodifiable set of the `AccessFlag access
 flags` for this class, possibly empty}

 

 If the underlying class is an array class:
 
 
-  its `PUBLIC`, `PRIVATE` and `PROTECTED`
      access flags are the same as those of its component type
 
-  its `ABSTRACT` and `FINAL` flags are present
 
-  its `INTERFACE` flag is absent, even when the
      component type is an interface
 
-  when preview features are enabled, its `IDENTITY` flag
       is present
 

 If this `Class` object represents a primitive type or
 void, the flags are `PUBLIC`, `ABSTRACT`, and
 `FINAL`.
 For `Class` objects representing void, primitive types, and
 arrays, access flags are absent other than as specified above.

 
      
          When preview features are enabled and this `Class` object
          either represents a class whose `class` file does not
          depend on preview features or represents an array type, its
          flags always include `IDENTITY`.
          

          When preview features are disabled, the `Class` object
          does not have the `IDENTITY` flag set.
      
 

 
      
          Developers should be aware that the presence of the `identity` modifier is dependent on whether preview features are
          enabled.  Use the `isValue` method to
          test if a class is an identity class or a value class.
          

          This snippet below checks whether a given `Class<?> clazz`
          would have its `IDENTITY` modifier set when preview
          features are enabled, yet behaves consistently regardless of
          whether preview features are enabled.
          {@snippet lang=java :
          !clazz.isPrimitive() && !clazz.isValue() && !clazz.isInterface()
          }

**参见**

- #getModifiers()

> *Since 20*
