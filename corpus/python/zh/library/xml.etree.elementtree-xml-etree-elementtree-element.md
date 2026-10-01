---
id: "python-zh-function-xml-etree-elementtree-element"
language: "python"
lang: "zh"
category: "function"
name: "Element"
signature: "Element(tag, /, attrib={}, **extra)"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/zh-cn/3/library/xml.etree.elementtree.html#xml.etree.elementtree.Element"
license: "PSF"
updated: "2026-10-01"
---

# Element

Element class.  This class defines the Element interface, and provides a
reference implementation of this interface.

*tag* is the element name.  *attrib* is
an optional dictionary, containing element attributes.  *extra* contains
additional attributes, given as keyword arguments.

The element name and the attribute names and values are strings or
`QName` instances, and the text and the tail are strings or
`None`.
The element name can also be `Comment` or
`ProcessingInstruction`, which are used for special elements.
If it is `None`, the element itself is not serialized: only its text
and its children are written, and its attributes are ignored.
This can be used for a fragment which contains several elements.
With `method="html"` the attribute value can also be `None`,
which produces an empty attribute (such as `checked`).
Other objects can be stored in the tree, but they cannot be serialized.

> *Changed in 3.15*: *attrib* can now be a :class:`frozendict`.

> *Changed in 3.15*: *tag* is now a positional-only parameter.

attribute:: tag

attribute:: text

attribute:: attrib

以下字典类方法作用于元素属性。

method:: clear()

method:: get(key, default=None)

method:: items()

method:: keys()

method:: set(key, value)

以下方法作用于元素的下级（子元素）。

method:: append(subelement)

method:: extend(subelements)

method:: find(match, namespaces=None)

method:: findall(match, namespaces=None)

method:: findtext(match, default=None, namespaces=None)

method:: insert(index, subelement)

method:: iter(tag=None)

method:: iterfind(match, namespaces=None)

method:: itertext()

method:: makeelement(tag, attrib)

method:: remove(subelement)

`Element` objects also support the following sequence type methods
for working with subelements: `~object.__delitem__`,
`~object.__getitem__`, `~object.__setitem__`,
`~object.__len__`.

Caution: Elements with no subelements will test as `False`.  In a future
release of Python, all elements will test as `True` regardless of whether
subelements exist.  Instead, prefer explicit `len(elem)` or
`elem is not None` tests.::

  element = root.find('foo')

  if not element:  # careful!
      print("element not found, or element has no subelements")

  if element is None:
      print("element not found")

> *Changed in 3.12*: Testing the truth value of an Element emits :exc:`DeprecationWarning`.

Prior to Python 3.8, the serialisation order of the XML attributes of
elements was artificially made predictable by sorting the attributes by
their name. Based on the now guaranteed ordering of dicts, this arbitrary
reordering was removed in Python 3.8 to preserve the order in which
attributes were originally parsed or created by user code.

In general, user code should try not to depend on a specific ordering of
attributes, given that the `XML Information Set
<https://www.w3.org/TR/xml-infoset/>`_ explicitly excludes the attribute
order from conveying information. Code should be prepared to deal with
any ordering on input. In cases where deterministic XML output is required,
e.g. for cryptographic signing or test data sets, canonical serialisation
is available with the `canonicalize` function.

In cases where canonical output is not applicable but a specific attribute
order is still desirable on output, code should aim for creating the
attributes directly in the desired order, to avoid perceptual mismatches
for readers of the code. In cases where this is difficult to achieve, a
recipe like the following can be applied prior to serialisation to enforce
an order independently from the Element creation::

  def reorder_attributes(root):
      for el in root.iter():
          attrib = el.attrib
          if len(attrib) > 1:
              # adjust attribute order, e.g. by sorting
              attribs = sorted(attrib.items())
              attrib.clear()
              attrib.update(attribs)
