---
id: "java-en-function-java-util-jar-attributes"
language: "java"
lang: "en"
category: "function"
name: "java.util.jar.Attributes"
title: "Attributes"
directive: "type"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes

The Attributes class maps Manifest attribute names to associated string
 values. Valid attribute names are case-insensitive, are restricted to
 the ASCII characters in the set [0-9a-zA-Z_-], and cannot exceed 70
 characters in length. There must be a colon and a SPACE after the name;
 the combined length will not exceed 72 characters.
 Attribute values can contain any characters and
 will be UTF8-encoded when written to the output stream.  See the
 JAR File Specification
 for more information about valid attribute names and values.

 

This map and its views have a predictable iteration order, namely the
 order that keys were inserted into the map, as with `LinkedHashMap`.

**参见**

- Manifest

> *Since 1.2*
