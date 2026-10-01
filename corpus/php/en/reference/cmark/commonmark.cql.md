---
id: "en-php-guide-class-commonmark-cql"
language: "php"
lang: "en"
category: "guide"
name: "class.commonmark-cql"
title: "The CommonMark\\CQL class"
module: "cmark"
source_url: "https://www.php.net/manual/en/class.commonmark-cql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The CommonMark\CQL class

CommonMark\CQL

   Introduction  CommonMark Query Language is a DSL for describing how to travel through a CommonMark Node tree implemented as a parser and compiler for a small set of instructions, and a virtual machine for executing those instructions.    Paths:  In its most simplistic form, a CQL query combines the following paths and `/` to describe how to travel through a tree:  firstChild lastChild previous next parent  For example, `/firstChild/lastChild` would travel to the last child node of the first child node.     Loops  CQL can be instructed to loop, for example through the children of, or siblings to a particular node, by using the path `children`, or `siblings`. For example, `/firstChild/children` will travel to all the children of the first child node.     Subqueries  CQL can be instructed how to travel by using a subquery like `[/firstChild]`. For example, `/firstChild/children[/firstChild]` will travel to the first child node of all the children of the first child node.     Loop Constraints  While looping, CQL can be instructed to constrict the travelled path to nodes of particular type. For example `/children(BlockQuote)` will travel to the children of a node where the type is `BlockQuote`. The following types are recognized (case insensitively):  BlockQuote List Item CodeBlock HtmlBlock CustomBlock Paragraph Heading ThematicBreak Text SoftBreak LineBreak Code HtmlInline CustomInline Emphasis Strong Link Image  Types may be used as a union, for example `/children(BlockQuote|List)` will travel to the children of a node where the type is `BlockQuote` or `List`. Types, or unions of types, may be also negated. For example `/children(~BlockQuote)` will travel to the children of a node where the type is not `BlockQuote`, and `/children(~BlockQuote|Paragraph)` will travel to the children of a node where the type is not `BlockQuote` or `Paragraph`     Path Constraints  CQL can be instructed to create a loop to travel to a node of a particular type, at a particular path. For example, `/firstChild(BlockQuote)` will travel to the first child node where the type is `BlockQuote`. Note that like other loops for `children` and `siblings`, this kind of path can only be followed by a subquery.     Implementation Notes  While CQL has been implemented as part of the PHP CommonMark extension, it stands separately from PHP and does not use PHP's virtual machine or internal representation of values.       Class Synopsis   `CommonMark\CQL`    `CommonMark\CQL`
