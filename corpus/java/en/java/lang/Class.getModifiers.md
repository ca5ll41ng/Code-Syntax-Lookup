---
id: "java-en-function-class-getmodifiers"
language: "java"
lang: "en"
category: "function"
name: "Class.getModifiers"
signature: "public int getModifiers()"
title: "Class.getModifiers"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getModifiers

```java
public int getModifiers()
```

Returns the Java language modifiers for this class or interface, encoded
 in an integer. The modifiers consist of the Java Virtual Machine's
 constants for `public`, `protected`,
 `private`, `final`, `static`,
 `abstract` and `interface`; they should be decoded
 using the methods of class `Modifier`.

 

 If the underlying class is an array class:
 
 
-  its `public`, `private` and `protected`
      modifiers are the same as those of its component type
 
-  its `abstract` and `final` modifiers are always
      `true`
 
-  its interface modifier is always `false`, even when
      the component type is an interface
 
-  when preview features are enabled, its `IDENTITY identity` modifier is always true
 

 If this `Class` object represents a primitive type or
 void, its `public`, `abstract`, and `final`
 modifiers are always `true`.
 For `Class` objects representing void, primitive types, and
 arrays, the values of other modifiers are `false` other
 than as specified above.

 
      
          When preview features are enabled and this `Class` object
          either represents a class whose `class` file does not
          depend on preview features or represents an array type, its
          `identity` modifier is always true.
          

          When preview features are disabled, the `Class` object
          does not have its `identity` modifier set.
      
 

 

 The modifier encodings are defined in section {@jvms 4.1}
 of The Java Virtual Machine Specification.

 
      
          Developers should be aware that the presence of the `identity` modifier is dependent on whether preview features are
          enabled.  Use the `isValue` method to
          test if a class is an identity class or a value class.
          

          This snippet below checks whether a given `Class<?> clazz`
          would have its `identity` modifier set when preview
          features are enabled, yet behaves consistently regardless of
          whether preview features are enabled.
          {@snippet lang=java :
          !clazz.isPrimitive() && !clazz.isValue() && !clazz.isInterface()
          }

**返回**

- the `int` representing the modifiers for this class

**参见**

- java.lang.reflect.Modifier
- #accessFlags()
- Java programming language and JVM modeling in core reflection

> *Since 1.1*
