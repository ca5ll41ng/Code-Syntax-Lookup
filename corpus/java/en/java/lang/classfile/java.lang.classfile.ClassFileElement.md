---
id: "java-en-function-java-lang-classfile-classfileelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassFileElement"
title: "ClassFileElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileElement

Marker interface for structures with special capabilities in the `class` file format. `AttributedElement` indicates a structure has
 `Attribute`s.  `CompoundElement` indicates a structure can be
 viewed as a composition of member structures, whose memberships are marked by
 `ClassElement`, `MethodElement`, `FieldElement`, or `CodeElement`.

 Membership Elements
 `ClassModel`, `MethodModel`, `FieldModel`, and `CodeModel` each has a dedicated interface marking its member structures:
 `ClassElement`, `MethodElement`, `FieldElement`, and
 `CodeElement`.  They can be supplied to a `ClassBuilder`, a
 `MethodBuilder`, a `FieldBuilder`, or a `CodeBuilder` to be
 included as members of the built model.  Unless otherwise specified, these
 structures are delivered during the `CompoundElement traversal` of
 the corresponding models.  Some of these elements may appear at most once or
 exactly once in the traversal of the models; such elements have special
 treatment by `ClassFileBuilder` and are specified in their modeling
 interfaces.  If such elements appear multiple times during traversal, the
 last occurrence should be used and all previous instances should be
 discarded.
 

 These membership element marker interfaces are sealed; future versions of the
 Java SE Platform may define new elements to the sealed hierarchy when the
 `class` file format for the Java Platform evolves.  Using an exhaustive
 pattern matching switch over these hierarchies indicates the user only wish
 the processing code to run on a specific version of Java Platform, and will
 fail if unknown new elements are encountered.

> *Since 24*
