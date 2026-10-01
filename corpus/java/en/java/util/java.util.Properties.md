---
id: "java-en-function-java-util-properties"
language: "java"
lang: "en"
category: "function"
name: "java.util.Properties"
title: "Properties"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties

The `Properties` class represents a persistent set of
 properties. The `Properties` can be saved to a stream
 or loaded from a stream. Each key and its corresponding value in
 the property list is a string.
 

 A property list can contain another property list as its
 "defaults"; this second property list is searched if
 the property key is not found in the original property list.
 

 Because `Properties` inherits from `Hashtable`, the
 `put` and `putAll` methods can be applied to a
 `Properties` object.  Their use is strongly discouraged as they
 allow the caller to insert entries whose keys or values are not
 `Strings`.  The `setProperty` method should be used
 instead. If the `store`, `save`, or `list` method is called
 on a "compromised" `Properties` object that contains a
 non-`String` key or value, the call will fail. Similarly,
 the call to the `propertyNames` method
 will fail if it is called on a "compromised" `Properties`
 object that contains a non-`String` key.

 

 The iterators returned by the `iterator` method of this class's
 "collection views" (that is, `entrySet()`, `keySet()`, and
 `values()`) may not fail-fast (unlike the Hashtable implementation).
 These iterators are guaranteed to traverse elements as they existed upon
 construction exactly once, and may (but are not guaranteed to) reflect any
 modifications subsequent to construction.
 

 The `load` `/`
 `store`
 methods load and store properties from and to a character based stream
 in a simple line-oriented format specified below.

 The `load` `/`
 `store`
 methods work the same way as the load(Reader)/store(Writer, String) pair, except
 the input/output stream is encoded in ISO 8859-1 character encoding.
 Characters that cannot be directly represented in this encoding can be written using
 Unicode escapes as defined in section {@jls 3.3} of
 The Java Language Specification;
 only a single 'u' character is allowed in an escape
 sequence.

 

 The `loadFromXML` and `storeToXML` methods load and store properties
 in a simple XML format.  By default the UTF-8 character encoding is used,
 however a specific encoding may be specified if required. Implementations
 are required to support UTF-8 and UTF-16 and may support other encodings.
 An XML properties document has the following DOCTYPE declaration:

 
```

 &lt;!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"&gt;
 
```

 Note that the system URI (http://java.sun.com/dtd/properties.dtd) is
 not accessed when exporting or importing properties; it merely
 serves as a string to uniquely identify the DTD, which is:
 
```

    &lt;?xml version="1.0" encoding="UTF-8"?&gt;

    &lt;!-- DTD for properties --&gt;

    &lt;!ELEMENT properties ( comment?, entry* ) &gt;

    &lt;!ATTLIST properties version CDATA #FIXED "1.0"&gt;

    &lt;!ELEMENT comment (#PCDATA) &gt;

    &lt;!ELEMENT entry (#PCDATA) &gt;

    &lt;!ATTLIST entry key CDATA #REQUIRED&gt;
 
```

 

This class is thread-safe: multiple threads can share a single
 `Properties` object without the need for external synchronization.

 The `Properties` class does not inherit the concept of a load factor
 from its superclass, `Hashtable`.

> *Since 1.0*
