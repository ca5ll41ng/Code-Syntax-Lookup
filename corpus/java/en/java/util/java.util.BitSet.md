---
id: "java-en-function-java-util-bitset"
language: "java"
lang: "en"
category: "function"
name: "java.util.BitSet"
title: "BitSet"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet

This class implements a vector of bits that grows as needed. Each
 component of the bit set has a `boolean` value. The
 bits of a `BitSet` are indexed by nonnegative integers.
 Individual indexed bits can be examined, set, or cleared. One
 `BitSet` may be used to modify the contents of another
 `BitSet` through logical AND, logical inclusive OR, and
 logical exclusive OR operations.

 

By default, all bits in the set initially have the value
 `false`.

 

Every bit set has a current size, which is the number of bits
 of space currently in use by the bit set. Note that the size is
 related to the implementation of a bit set, so it may change with
 implementation. The length of a bit set relates to logical length
 of a bit set and is defined independently of implementation.

 

Unless otherwise noted, passing a null parameter to any of the
 methods in a `BitSet` will result in a
 `NullPointerException`.

 

A `BitSet` is not safe for multithreaded use without
 external synchronization.

> *Since 1.0*
