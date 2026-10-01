---
id: "python-zh-function-xml-etree-elementtree-iterparse"
language: "python"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["B314"],"cwe":["CWE-20"]}
name: "iterparse"
signature: "iterparse(source, events=None, parser=None, *, target=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/zh-cn/3/library/xml.etree.elementtree.html#xml.etree.elementtree.iterparse"
license: "PSF"
updated: "2026-10-01"
---

# iterparse

Parses an XML section incrementally, and reports what's going on to the
user.  Unless a custom target is used, an element tree is built.
*source* is a filename or `file object`
containing XML data.  *events* is a sequence of events to report back.  The
supported events are the strings `"start"`, `"end"`, `"comment"`,
`"pi"`, `"start-ns"` and `"end-ns"`
(the "ns" events are used to get detailed namespace
information).  If *events* is omitted, only `"end"` events are reported.
*parser* is an optional parser instance.
If not given, the standard `XMLParser` parser is used.
*parser* must be an instance of `XMLParser` or its subclass.
*target* is the target of the standard parser,
as for `XMLPullParser`;
it cannot be used together with *parser*.
Returns an `iterator` providing `(event, obj)` pairs,
as described for `XMLPullParser.read_events`;
it has a `root` attribute that references the root element of the
resulting XML tree, or the value returned by the `close()` method
of a custom target, once *source* is fully read.
If a custom target is used, it is set to the value returned
by the `close` method of the target.

The iterator has the `close` method that closes the internal
file object if *source* is a filename.

Note that while `iterparse` builds the tree incrementally, it issues
blocking reads on *source* (or the file it names).  As such, it's unsuitable
for applications where blocking reads can't be made.  For fully non-blocking
parsing, see `XMLPullParser`.

The tree is only built incrementally, it is not freed incrementally:
every parsed element is kept until the whole document is read.
See `elementtree-pull-parsing` for how to keep the memory usage low.

> **Note**
>
> `iterparse` only guarantees that it has seen the ">" character of a
> starting tag when it emits a "start" event, so the attributes are defined,
> but the contents of the text and tail attributes are undefined at that
> point.  The same applies to the element children; they may or may not be
> present.
>
> 如果你需要已完全填充的元素，请改为查找 "end" 事件。
>

> *Deprecated since 3.4*: The *parser* argument.

> *Changed in 3.8*: The ``comment`` and ``pi`` events were added.

> *Changed in 3.13*: Added the :meth:`!close` method.

> *Changed in 3.15*: A :exc:`ResourceWarning` is now emitted if the iterator opened a file and is not explicitly closed.

> *Changed in next*: Added the *target* parameter.
