---
id: "python-en-function-xml-etree-elementtree-xmlpullparser"
language: "python"
lang: "en"
category: "function"
name: "XMLPullParser"
signature: "XMLPullParser(events=None, *, target=None)"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.XMLPullParser"
license: "PSF"
updated: "2026-10-01"
---

# XMLPullParser

A pull parser suitable for non-blocking applications.  Its input-side API is
similar to that of `XMLParser`, but instead of pushing calls to a
callback target, `XMLPullParser` collects an internal list of parsing
events and lets the user read from it. *events* is a sequence of events to
report back.  The supported events are the strings `"start"`, `"end"`,
`"comment"`, `"pi"`, `"start-ns"` and `"end-ns"` (the "ns" events
are used to get detailed namespace information).  If *events* is omitted,
only `"end"` events are reported.

*target* is the target object of the underlying `XMLParser`.
If omitted, the standard `TreeBuilder` is used,
and the reported objects are `Element` instances.
With other targets the reported object is the value returned
by the corresponding method of the target,
so no tree is built if the target does not build one.
The target must implement the methods for all requested events,
except `start_ns` and `end_ns`:
if they are not implemented, a `(prefix, uri)` tuple and `None`
are reported for the `"start-ns"` and `"end-ns"` events.

> *Changed in next*: Added the *target* parameter.

method:: feed(data)

method:: flush()

method:: close()

method:: read_events()

> **Note**
>
> `XMLPullParser` only guarantees that it has seen the ">"
> character of a starting tag when it emits a "start" event, so the
> attributes are defined, but the contents of the text and tail attributes
> are undefined at that point.  The same applies to the element children;
> they may or may not be present.
>
> If you need a fully populated element, look for "end" events instead.
>

> *Added in 3.4*

> *Changed in 3.8*: The ``comment`` and ``pi`` events were added.
