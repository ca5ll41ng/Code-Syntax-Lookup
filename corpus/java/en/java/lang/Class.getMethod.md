---
id: "java-en-function-class-getmethod"
language: "java"
lang: "en"
category: "function"
name: "Class.getMethod"
signature: "public Method getMethod(String name, Class<?>... parameterTypes) throws NoSuchMethodException"
title: "Class.getMethod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getMethod

```java
public Method getMethod(String name, Class<?>... parameterTypes) throws NoSuchMethodException
```

Returns a `Method` object that reflects the specified public
 member method of the class or interface represented by this
 `Class` object. The `name` parameter is a
 `String` specifying the simple name of the desired method. The
 `parameterTypes` parameter is an array of `Class`
 objects that identify the method's formal parameter types, in declared
 order. If `parameterTypes` is `null`, it is
 treated as if it were an empty array.

 

 If this `Class` object represents an array type, then this
 method finds any public method inherited by the array type from
 `Object` except method `clone()`.

 

 If this `Class` object represents an interface then this
 method does not find any implicitly declared method from
 `Object`. Therefore, if no methods are explicitly declared in
 this interface or any of its superinterfaces, then this method does not
 find any method.

 

 This method does not find any method with name `ConstantDescs#INIT_NAME` or `ConstantDescs#CLASS_INIT_NAME`.

 

 Generally, the method to be reflected is determined by the 4 step
 algorithm that follows.
 Let C be the class or interface represented by this `Class` object:
 
 
-  A union of methods is composed of:
   
   
-  C's declared public instance and static methods as returned by
        `getDeclaredMethods` and filtered to include only public
        methods that match given `name` and `parameterTypes`
   
-  If C is a class other than `Object`, then include the result
        of invoking this algorithm recursively on the superclass of C.
   
-  Include the results of invoking this algorithm recursively on all
        direct superinterfaces of C, but include only instance methods.
   

 
-  This union is partitioned into subsets of methods with same
      return type (the selection of methods from step 1 also guarantees that
      they have the same method name and parameter types).
 
-  Within each such subset only the most specific methods are selected.
      Let method M be a method from a set of methods with same VM
      signature (return type, name, parameter types).
      M is most specific if there is no such method N != M from the same
      set, such that N is more specific than M. N is more specific than M
      if:
   
   
-  N is declared by a class and M is declared by an interface; or
   
-  N and M are both declared by classes or both by interfaces and
        N's declaring type is the same as or a subtype of M's declaring type
        (clearly, if M's and N's declaring types are the same type, then
        M and N are the same method).
   

 
-  The result of this algorithm is chosen arbitrarily from the methods
      with most specific return type among all selected methods from step 3.
      Let R be a return type of a method M from the set of all selected methods
      from step 3. M is a method with most specific return type if there is
      no such method N != M from the same set, having return type S != R,
      such that S is a subtype of R as determined by
      R.class.`isAssignableFrom`(S.class).
 

 parameter types in a class because while the Java language forbids a
 class to declare multiple methods with the same signature but different
 return types, the Java virtual machine does not.  This
 increased flexibility in the virtual machine can be used to
 implement various language features.  For example, covariant
 returns can be implemented with `isBridge bridge methods`; the bridge
 method and the overriding method would have the same
 signature but different return types. This method would return the
 overriding method as it would have a more specific return type.

**参数**

- **name** — the name of the method
- **parameterTypes** — the list of parameters, may be `null`

**返回**

- the `Method` object that matches the specified `name` and `parameterTypes`

**异常**

- **NoSuchMethodException** — if a matching method is not found, if `parameterTypes` contains `null`, or if the name is `ConstantDescs#INIT_NAME` or `ConstantDescs#CLASS_INIT_NAME`

> *Since 1.1*
