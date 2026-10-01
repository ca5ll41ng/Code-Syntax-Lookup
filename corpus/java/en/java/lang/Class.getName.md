---
id: "java-en-function-class-getname"
language: "java"
lang: "en"
category: "function"
name: "Class.getName"
signature: "public String getName()"
title: "Class.getName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getName

```java
public String getName()
```

Returns the  name of the entity (class, interface, array class,
 primitive type, or void) represented by this `Class` object.

 

 If this `Class` object represents a class or interface,
 not an array class, then:
 
 
-  If the class or interface is not `isHidden() hidden`,
      then the `#binary-name binary name`
      of the class or interface is returned.
 
-  If the class or interface is hidden, then the result is a string
      of the form: `N + '/' + `
      where `N` is the `#binary-name binary name`
      indicated by the `class` file passed to
      `defineHiddenClass(byte[], boolean, MethodHandles.Lookup.ClassOption...)
      Lookup::defineHiddenClass`, and `` is an unqualified name.
 

 

 If this `Class` object represents an array class, then
 the result is a string consisting of one or more '`[`' characters
 representing the depth of the array nesting, followed by the element
 type as encoded using the following table:

 
 Element types and encodings
 
  Element Type  Encoding
 
 
  `boolean`  `Z`
  `byte`     `B`
  `char`     `C`
  class or interface with `#binary-name binary name` N
                                       `L`N`;`
  `double`   `D`
  `float`    `F`
  `int`      `I`
  `long`     `J`
  `short`    `S`
 
 

 

 If this `Class` object represents a primitive type or `void`,
 then the result is a string with the same spelling as the Java language
 keyword which corresponds to the primitive type or `void`.

 

 Examples:
 
```

 String.class.getName()
     returns "java.lang.String"
 Character.UnicodeBlock.class.getName()
     returns "java.lang.Character$UnicodeBlock"
 byte.class.getName()
     returns "byte"
 (new Object[3]).getClass().getName()
     returns "[Ljava.lang.Object;"
 (new int[3][4][5][6][7][8][9]).getClass().getName()
     returns "[[[[[[[I"
 
```

 Distinct class objects can have the same name but different class loaders.

**返回**

- the name of the class, interface, or other entity represented by this `Class` object.
