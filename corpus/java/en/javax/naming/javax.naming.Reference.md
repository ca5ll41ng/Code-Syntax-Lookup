---
id: "java-en-function-javax-naming-reference"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.Reference"
title: "Reference"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference

This class represents a reference to an object that is found outside of
 the naming/directory system.

 Reference provides a way of recording address information about
 objects which themselves are not directly bound to the naming/directory system.

 A Reference consists of an ordered list of addresses and class information
 about the object being referenced.
 Each address in the list identifies a communications endpoint
 for the same conceptual object.  The "communications endpoint"
 is information that indicates how to contact the object. It could
 be, for example, a network address, a location in memory on the
 local machine, another process on the same machine, etc.
 The order of the addresses in the list may be of significance
 to object factories that interpret the reference.

 Multiple addresses may arise for
 various reasons, such as replication or the object offering interfaces
 over more than one communication mechanism.  The addresses are indexed
 starting with zero.

 A Reference also contains information to assist in creating an instance
 of the object to which this Reference refers.  It contains the class name
 of that object, and the class name and location of the factory to be used
 to create the object.
 The class factory location is a space-separated list of URLs representing
 the class path used to load the factory.  When the factory class (or
 any class or resource upon which it depends) needs to be loaded,
 each URL is used (in order) to attempt to load the class.

 A Reference instance is not synchronized against concurrent access by multiple
 threads. Threads that need to access a single Reference concurrently should
 synchronize amongst themselves and provide the necessary locking.

**参见**

- RefAddr
- StringRefAddr
- BinaryRefAddr

> *Since 1.3*
