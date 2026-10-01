---
id: "java-en-function-javax-naming-compositename"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.CompositeName"
title: "CompositeName"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CompositeName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeName

This class represents a composite name -- a sequence of
 component names spanning multiple namespaces.
 Each component is a string name from the namespace of a
 naming system. If the component comes from a hierarchical
 namespace, that component can be further parsed into
 its atomic parts by using the CompoundName class.

 The components of a composite name are numbered.  The indexes of a
 composite name with N components range from 0 up to, but not including, N.
 This range may be written as [0,N).
 The most significant component is at index 0.
 An empty composite name has no components.

 JNDI Composite Name Syntax
 JNDI defines a standard string representation for composite names. This
 representation is the concatenation of the components of a composite name
 from left to right using the component separator (a forward
 slash character (/)) to separate each component.
 The JNDI syntax defines the following meta characters:
 
 
- escape (backward slash \),
 
- quote characters  (single (') and double quotes (")), and
 
- component separator (forward slash character (/)).
 

 Any occurrence of a leading quote, an escape preceding any meta character,
 an escape at the end of a component, or a component separator character
 in an unquoted component must be preceded by an escape character when
 that component is being composed into a composite name string.
 Alternatively, to avoid adding escape characters as described,
 the entire component can be quoted using matching single quotes
 or matching double quotes. A single quote occurring within a double-quoted
 component is not considered a meta character (and need not be escaped),
 and vice versa.

 When two composite names are compared, the case of the characters
 is significant.

 A leading component separator (the composite name string begins with
 a separator) denotes a leading empty component (a component consisting
 of an empty string).
 A trailing component separator (the composite name string ends with
 a separator) denotes a trailing empty component.
 Adjacent component separators denote an empty component.

Composite Name Examples
This table shows examples of some composite names. Each row shows
the string form of a composite name and its corresponding structural form
(`CompositeName`).

examples showing string
 form of composite name and its corresponding structural form (CompositeName)

String Name
CompositeName

""

{} (the empty name == new CompositeName("") == new CompositeName())

"x"

{"x"}

"x/y"

{"x", "y"}

"x/"
{"x", ""}

"/x"
{"", "x"}

"/"
{""}

"//"
{"", ""}

"/x/"
{"", "x", ""}

"x//y"
{"x", "", "y"}

Composition Examples
 Here are some composition examples.  The right column shows composing
 string composite names while the left column shows composing the
 corresponding `CompositeName`s.  Notice that composing the
 string forms of two composite names simply involves concatenating
 their string forms together.
composition examples
 showing string names and composite names

String Names
CompositeNames

"x/y"           + "/"   = x/y/

{"x", "y"}      + {""}  = {"x", "y", ""}

""              + "x"   = "x"

{}              + {"x"} = {"x"}

"/"             + "x"   = "/x"

{""}            + {"x"} = {"", "x"}

"x"   + ""      + ""    = "x"

{"x"} + {}      + {}    = {"x"}

Multithreaded Access
 A `CompositeName` instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify a
 `CompositeName` should lock the object.

> *Since 1.3*
