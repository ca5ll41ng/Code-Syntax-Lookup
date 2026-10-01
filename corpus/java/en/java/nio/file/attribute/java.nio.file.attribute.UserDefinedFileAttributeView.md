---
id: "java-en-function-java-nio-file-attribute-userdefinedfileattributeview"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.UserDefinedFileAttributeView"
title: "UserDefinedFileAttributeView"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserDefinedFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserDefinedFileAttributeView

A file attribute view that provides a view of a file's user-defined
 attributes, sometimes known as extended attributes. User-defined
 file attributes are used to store metadata with a file that is not meaningful
 to the file system. It is primarily intended for file system implementations
 that support such a capability directly but may be emulated. The details of
 such emulation are highly implementation specific and therefore not specified.

 

 This `FileAttributeView` provides a view of a file's user-defined
 attributes as a set of name/value pairs, where the attribute name is
 represented by a `String`. An implementation may require to encode and
 decode from the platform or file system representation when accessing the
 attribute. The value has opaque content. This attribute view defines the
 `read read` and `write write` methods to read the value into
 or write from a `ByteBuffer`. This `FileAttributeView` is not
 intended for use where the size of an attribute value is larger than `MAX_VALUE`.

 

 The `supportsFileAttributeView
 supportsFileAttributeView` method may be used to test if a specific `java.nio.file.FileStore FileStore` supports the storage of user-defined
 attributes.

 

 Where dynamic access to file attributes is required, the `getAttribute getAttribute` method may be used to read
 the attribute value. The attribute value is returned as a byte array (byte[]).
 The `setAttribute setAttribute` method may be used
 to write the value of a user-defined attribute from a buffer (as if by
 invoking the `write write` method), or byte array (byte[]).

> *Since 1.7*
