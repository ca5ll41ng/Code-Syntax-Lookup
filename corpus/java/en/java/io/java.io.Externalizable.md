---
id: "java-en-function-java-io-externalizable"
language: "java"
lang: "en"
category: "function"
name: "java.io.Externalizable"
title: "Externalizable"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Externalizable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Externalizable

A `Serializable` class that fully implements its own protocol
 for reading and writing to a serialization stream.
 

 Only the identity of the class of an `Externalizable` instance is
 written in the serialization stream and it is the responsibility
 of the class to save and restore the contents of its instances.
 The `writeExternal` and `readExternal` methods give the
 class complete control over the format and contents of the stream
 for an object and its supertypes. These methods must explicitly
 coordinate with the supertype to save its state. These methods supersede
 customized implementations of `writeObject` and `readObject`
 methods.
 

 Object Serialization uses the `Serializable` and `Externalizable`
 interfaces.  Object persistence mechanisms can use them as well.  Each
 object to be stored is tested for the `Externalizable` interface. If
 the object supports `Externalizable`, the `writeExternal` method
 is called. If the object does not support `Externalizable` and does
 implement `Serializable`, the object is saved using
 `ObjectOutputStream`.
 

 When an `Externalizable` object is reconstructed, an instance is
 created using the public no-arg constructor, then the
 `readExternal` method called.
 

 An `Externalizable` instance can designate a substitution object via
 the `writeReplace` and `readResolve` methods documented in the
 `Serializable` interface.
 

 Record classes can implement `Externalizable`, but it is ignored:
 instances will receive the same treatment as other `Serializable`
 instances, as defined by the
 
 Java Object Serialization Specification, Section 1.13,
 "Serialization of Records".

 
      
          

`isValue Value classes` that are not records are
          permitted to implement `Externalizable`, but the class has no
          mutable fields, and so is unlikely to be able to properly implement
          the `readExternal` method. Instead, the `writeReplace`
          method should be used to designate an alternative object for
          serialization. At deserialization time, the alternative object can
          implement `readResolve` to construct the expected value class
          instance.

**参见**

- java.io.ObjectOutputStream
- java.io.ObjectInputStream
- java.io.ObjectOutput
- java.io.ObjectInput
- java.io.Serializable

> *Since 1.1*
