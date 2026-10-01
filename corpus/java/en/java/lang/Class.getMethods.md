---
id: "java-en-function-class-getmethods"
language: "java"
lang: "en"
category: "function"
name: "Class.getMethods"
signature: "public Method[] getMethods()"
title: "Class.getMethods"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getMethods

```java
public Method[] getMethods()
```

Returns an array containing `Method` objects reflecting all the
 public methods of the class or interface represented by this `Class` object, including those declared by the class or interface and
 those inherited from superclasses and superinterfaces.

 

 If this `Class` object represents an array type, then the
 returned array has a `Method` object for each of the public
 methods inherited by the array type from `Object`. It does not
 contain a `Method` object for `clone()`.

 

 If this `Class` object represents an interface then the
 returned array does not contain any implicitly declared methods from
 `Object`. Therefore, if no methods are explicitly declared in
 this interface or any of its superinterfaces then the returned array
 has length 0. (Note that a `Class` object which represents a class
 always has public methods, inherited from `Object`.)

 

 The returned array never contains methods with names `ConstantDescs#INIT_NAME` or `ConstantDescs#CLASS_INIT_NAME`.

 

 The elements in the returned array are not sorted and are not in any
 particular order.

 

 Generally, the result is computed as with the following 4 step algorithm.
 Let C be the class or interface represented by this `Class` object:
 
 
-  A union of methods is composed of:
   
   
-  C's declared public instance and static methods as returned by
        `getDeclaredMethods` and filtered to include only public
        methods.
   
-  If C is a class other than `Object`, then include the result
        of invoking this algorithm recursively on the superclass of C.
   
-  Include the results of invoking this algorithm recursively on all
        direct superinterfaces of C, but include only instance methods.
   

 
-  Union from step 1 is partitioned into subsets of methods with same
      signature (name, parameter types) and return type.
 
-  Within each such subset only the most specific methods are selected.
      Let method M be a method from a set of methods with same signature
      and return type. M is most specific if there is no such method
      N != M from the same set, such that N is more specific than M.
      N is more specific than M if:
   
   
-  N is declared by a class and M is declared by an interface; or
   
-  N and M are both declared by classes or both by interfaces and
        N's declaring type is the same as or a subtype of M's declaring type
        (clearly, if M's and N's declaring types are the same type, then
        M and N are the same method).
   

 
-  The result of this algorithm is the union of all selected methods from
      step 3.
 

 and parameter types in a class because while the Java language forbids a
 class to declare multiple methods with the same signature but different
 return types, the Java virtual machine does not.  This
 increased flexibility in the virtual machine can be used to
 implement various language features.  For example, covariant
 returns can be implemented with `isBridge bridge methods`; the bridge
 method and the overriding method would have the same
 signature but different return types.

**返回**

- the array of `Method` objects representing the public methods of this class

> *Since 1.1*
