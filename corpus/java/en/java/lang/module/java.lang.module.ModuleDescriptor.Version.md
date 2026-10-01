---
id: "java-en-function-java-lang-module-moduledescriptor-version"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleDescriptor.Version"
title: "Version"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Version

A module's version string.

 

 A version string has three components: The version number itself, an
 optional pre-release version, and an optional build version.  Each
 component is a sequence of tokens; each token is either a non-negative
 integer or a string.  Tokens are separated by the punctuation characters
 `'.'`, `'-'`, or `'+'`, or by transitions from a
 sequence of digits to a sequence of characters that are neither digits
 nor punctuation characters, or vice versa.  Consecutive repeated
 punctuation characters are treated as a single punctuation character.

 

   
-  The version number is a sequence of tokens separated by
   `'.'` characters, terminated by the first `'-'` or `'+'` character. 

   
-  The pre-release version is a sequence of tokens separated
   by `'.'` or `'-'` characters, terminated by the first
   `'+'` character. 

   
-  The build version is a sequence of tokens separated by
   `'.'`, `'-'`, or `'+'` characters.

 

 

 When comparing two version strings, the elements of their
 corresponding components are compared in pointwise fashion.  If one
 component is longer than the other, but otherwise equal to it, then the
 first component is considered the greater of the two; otherwise, if two
 corresponding elements are integers then they are compared as such;
 otherwise, at least one of the elements is a string, so the other is
 converted into a string if it is an integer and the two are compared
 lexicographically.  Trailing integer elements with the value zero are
 ignored.

 

 Given two version strings, if their version numbers differ then the
 result of comparing them is the result of comparing their version
 numbers; otherwise, if one of them has a pre-release version but the
 other does not then the first is considered to precede the second,
 otherwise the result of comparing them is the result of comparing their
 pre-release versions; otherwise, the result of comparing them is the
 result of comparing their build versions.

**参见**

- ModuleDescriptor#version()

> *Since 9*
