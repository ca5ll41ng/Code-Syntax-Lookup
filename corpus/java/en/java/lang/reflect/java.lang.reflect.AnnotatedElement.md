---
id: "java-en-function-java-lang-reflect-annotatedelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.AnnotatedElement"
title: "AnnotatedElement"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedElement

Represents an annotated construct of the program currently running
 in this VM.

 A construct is either an element or a type. Annotations on an
 element are on a declaration, whereas annotations on a
 type are on a specific use of a type name.

 As defined by The Java Language Specification
 section {@jls 9.7.4}, an annotation on an element is a
 {@index "declaration annotation"} and an annotation on a type is a
 {@index "type annotation"}.

 Note that any annotations returned by methods on the `AnnotatedType AnnotatedType` interface and its subinterfaces are
 type annotations as the entity being potentially annotated is a
 type. Annotations returned by methods outside of the `AnnotatedType` hierarchy are declaration annotations.

 

This interface allows annotations to be read reflectively.  All
 annotations returned by methods in this interface are immutable and
 serializable. The arrays returned by methods of this interface may
 be modified by callers without affecting the arrays returned to
 other callers.

 

The `getAnnotationsByType` and `getDeclaredAnnotationsByType` methods support multiple
 annotations of the same type on an element. If the argument to
 either method is a repeatable annotation type (JLS {@jls 9.6}),
 then the method will "look through" a container annotation (JLS
 {@jls 9.7}), if present, and return any annotations inside the
 container. Container annotations may be generated at compile-time
 to wrap multiple annotations of the argument type.

 

The terms directly present, indirectly present,
 present, and associated are used throughout this
 interface to describe precisely which annotations are returned by
 methods:

 

 
-  An annotation A is {@index "directly present"} on an
 element E if E has a `RuntimeVisibleAnnotations` or `RuntimeVisibleParameterAnnotations` or `RuntimeVisibleTypeAnnotations` attribute, and the attribute
 contains A.

 
- An annotation A is {@index "indirectly present"} on an
 element E if E has a `RuntimeVisibleAnnotations` or
 `RuntimeVisibleParameterAnnotations` or `RuntimeVisibleTypeAnnotations`
 attribute, and A 's type is repeatable, and the attribute contains
 exactly one annotation whose value element contains A and whose
 type is the containing annotation type of A 's type.

 
- An annotation A is {@index "present"} on an element E if either:

 

 
- A is directly present on E; or

 
- No annotation of A 's type is directly present on
 E, and E is a class, and A 's type is
 inheritable, and A is present on the superclass of E.

 

 
- An annotation A is {@index "associated"} with an element E
 if either:

 

 
- A is directly or indirectly present on E; or

 
- No annotation of A 's type is directly or indirectly
 present on E, and E is a class, and A's type
 is inheritable, and A is associated with the superclass of
 E.

 

 

 

The table below summarizes which kind of annotation presence
 different methods in this interface examine.

 
 Overview of kind of presence detected by different AnnotatedElement methods
 
 Method
     Kind of Presence
 Return Type
     Signature
     Directly Present
     Indirectly Present
     Present
     Associated
 
 
 `T`
 `getAnnotation`
 X
 
 `Annotation[]`
 `getAnnotations getAnnotations`
 X
 
 `T[]`
 `getAnnotationsByType`
 X
 
 `T`
 `getDeclaredAnnotation`
 X
 
 `Annotation[]`
 `getDeclaredAnnotations getDeclaredAnnotations`
 X
 
 `T[]`
 `getDeclaredAnnotationsByType`
 XX
 
 
 

 

For an invocation of `get[Declared]AnnotationsByType(Class )`,
 the order of annotations which are directly or indirectly
 present on an element E is computed as if indirectly present
 annotations on E are directly present on E in place
 of their container annotation, in the order in which they appear in
 the value element of the container annotation.

 

There are several compatibility concerns to keep in mind if an
 annotation type T is originally not repeatable and
 later modified to be repeatable.

 The containing annotation type for T is TC.

 

 
- Modifying T to be repeatable is source and binary
 compatible with existing uses of T and with existing uses
 of TC.

 That is, for source compatibility, source code with annotations of
 type T or of type TC will still compile. For binary
 compatibility, class files with annotations of type T or of
 type TC (or with other kinds of uses of type T or of
 type TC) will link against the modified version of T
 if they linked against the earlier version.

 (An annotation type TC may informally serve as an acting
 containing annotation type before T is modified to be
 formally repeatable. Alternatively, when T is made
 repeatable, TC can be introduced as a new type.)

 
- If an annotation type TC is present on an element, and
 T is modified to be repeatable with TC as its
 containing annotation type then:

 

 
- The change to T is behaviorally compatible with respect
 to the `get[Declared]Annotation(Class)` (called with an
 argument of T or TC) and `get[Declared]Annotations()` methods because the results of the
 methods will not change due to TC becoming the containing
 annotation type for T.

 
- The change to T changes the results of the `get[Declared]AnnotationsByType(Class)` methods called with an
 argument of T, because those methods will now recognize an
 annotation of type TC as a container annotation for T
 and will "look through" it to expose annotations of type T.

 

 
- If an annotation of type T is present on an
 element and T is made repeatable and more annotations of
 type T are added to the element:

 

 
-  The addition of the annotations of type T is both
 source compatible and binary compatible.

 
- The addition of the annotations of type T changes the results
 of the `get[Declared]Annotation(Class)` methods and `get[Declared]Annotations()` methods, because those methods will now
 only see a container annotation on the element and not see an
 annotation of type T.

 
- The addition of the annotations of type T changes the
 results of the `get[Declared]AnnotationsByType(Class)`
 methods, because their results will expose the additional
 annotations of type T whereas previously they exposed only a
 single annotation of type T.

 

 

 

If an annotation returned by a method in this interface contains
 (directly or indirectly) a `Class`-valued member referring to
 a class that is not accessible in this VM, attempting to read the class
 by calling the relevant Class-returning method on the returned annotation
 will result in a `TypeNotPresentException`.

 

Similarly, attempting to read an enum-valued member will result in
 a `EnumConstantNotPresentException` if the enum constant in the
 annotation is no longer present in the enum class.

 

If an annotation type T is (meta-)annotated with an
 `@Repeatable` annotation whose value element indicates a type
 TC, but TC does not declare a `value()` method
 with a return type of T`[]`, then an exception of type
 `java.lang.annotation.AnnotationFormatError` is thrown.

 

Finally, attempting to read a member whose definition has evolved
 incompatibly will result in an `java.lang.annotation.AnnotationTypeMismatchException` or an
 `java.lang.annotation.IncompleteAnnotationException`.

**参见**

- java.lang.EnumConstantNotPresentException
- java.lang.TypeNotPresentException
- AnnotationFormatError
- java.lang.annotation.AnnotationTypeMismatchException
- java.lang.annotation.IncompleteAnnotationException

> *Since 1.5*
