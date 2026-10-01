---
id: "java-en-function-java-lang-annotation-elementtype"
language: "java"
lang: "en"
category: "function"
name: "java.lang.annotation.ElementType"
title: "ElementType"
directive: "type"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/ElementType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ElementType

The constants of this enumerated class provide a simple classification of the
 syntactic locations where annotations may appear in a Java program. These
 constants are used in `java.lang.annotation.Target Target`
 meta-annotations to specify where it is legal to write annotations of a
 given type.

 

The syntactic locations where annotations may appear are split into
 declaration contexts, where annotations apply to declarations, and
 type contexts, where annotations apply to types used in
 declarations and expressions.

 

The constants `ANNOTATION_TYPE`, `CONSTRUCTOR`, `FIELD`, `LOCAL_VARIABLE`, `METHOD`, `PACKAGE`, `MODULE`, `PARAMETER`, `TYPE`, and `TYPE_PARAMETER`
 correspond to the declaration contexts in JLS {@jls 9.6.4.1}.

 

For example, an annotation whose interface is meta-annotated with
 `@Target(ElementType.FIELD)` may only be written as a modifier for a
 field declaration.

 

The constant `TYPE_USE` corresponds to the type contexts in JLS
 {@jls 4.11}, as well as to two declaration contexts: class and interface
 declarations (including annotation declarations) and type parameter
 declarations.

 

For example, an annotation whose interface is meta-annotated with
 `@Target(ElementType.TYPE_USE)` may be written on the class or
 interface of a field (or within the class or interface of the field, if it
 is a nested or parameterized class or interface, or array class), and may
 also appear as a modifier for, say, a class declaration.

 

The `TYPE_USE` constant includes class and interface declarations
 and type parameter declarations as a convenience for designers of
 type checkers which give semantics to annotation interfaces. For example,
 if the annotation interface `NonNull` is meta-annotated with
 `@Target(ElementType.TYPE_USE)`, then `@NonNull`
 `class C {...`} could be treated by a type checker as indicating that
 all variables of class `C` are non-null, while still allowing
 variables of other classes to be non-null or not non-null based on whether
 `@NonNull` appears at the variable's declaration.

> *Since 1.5*
