---
id: "java-en-function-java-lang-classfile-classfiletransform"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassFileTransform"
title: "ClassFileTransform"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileTransform

A transformation on a `CompoundElement` by processing its individual
 member elements and sending the results to a `ClassFileBuilder`,
 through `transform`.  A subtype of `ClassFileTransform` is defined for each subtype of `CompoundElement`
 and `ClassFileBuilder`, as shown in the sealed class hierarchy below.
 

 For example, this is a basic transformation of a `CodeModel` that
 redirects all calls to static methods in the `Foo` class to the `Bar` class, preserving all other elements:
 {@snippet file="PackageSnippets.java" region=fooToBarTransform}
 Note that if no transformation of a member element is desired, the element
 should be presented to `with builder::with`.  If no
 action is taken, that member element is dropped.
 

 More advanced usages of transforms include `#start-end start or
 end handling`, `#stateful stateful transformation` that makes a
 decision based on previously encountered member elements, and `#composition composition` of transforms, where one transform processes the
 results of a previous transform on the input compound structure.  All these
 capabilities are supported by this interface and accessible to user transform
 implementations.
 
 Users can define custom start and end handling for a transform by overriding
 `atStart` and `atEnd`.  The start handler is called before any
 member element is processed, and the end handler is called after all member
 elements are processed.  For example, the start handler can be used to inject
 extra code elements to the beginning of a code array, and the end handler,
 combined with stateful transformation, can perform cleanup actions, such as
 determining if an attribute has been merged, or if a new attribute should be
 defined.  Each subtype of `ClassFileTransform` defines a utility method
 `endHandler` that returns a transform that only has end handling.
 
 Transforms can have states that persist across processing of individual
 member elements.  For example, if a transform injects an annotation, the
 transform may keep track if it has encountered and presented an updated
 `RuntimeVisibleAnnotationsAttribute` to the builder; if it has not yet,
 it can present a new attribute containing only the injected annotation in its
 end handler.  If such a transform is to be shared or reused, each returned
 transform should have its own state.  Each subtype of `ClassFileTransform`
 defines a utility method `ofStateful` where a supplier creates the
 transform at its initial state each time the transform is reused.
 
 Transforms can be composed via `andThen`.  When this transform is
 composed with another transform, it means the output member elements received
 by the `ClassFileBuilder` become the input elements to that other
 transform.  Composition avoids building intermediate structures for multiple
 transforms to run on.  Each subtype of `ClassFileTransform` implements
 `andThen`, which generally should not be implemented by users.
 

 Transforms that run on smaller structures can be lifted to its enclosing
 structures to selectively run on all enclosed smaller structures of the same
 kind.  For example, a `CodeTransform` can be lifted via `transformingMethodBodies` to
 transform the method body of select methods in the class it runs on.  This
 allows users to write small transforms and apply to larger scales.
 

 Besides `transform`, there are other methods that
 accepts a transform conveniently, such as `transformClass`,
 `transformField`, `transformMethod`, or
 `transformCode`.  They are convenience methods that suit
 the majority of transformation scenarios.

**参数**

- **the** — transform type
- **the** — member element type
- **the** — builder type

> *Since 24*
