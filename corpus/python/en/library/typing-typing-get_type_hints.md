---
id: "python-en-function-typing-get_type_hints"
language: "python"
lang: "en"
category: "function"
name: "get_type_hints"
signature: "get_type_hints(obj, globalns=None, localns=None, include_extras=False, *, format=Format.VALUE)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.get_type_hints"
license: "PSF"
updated: "2026-10-01"
---

# get_type_hints

Return a dictionary containing type hints for a function, method, module,
class object, or other callable object.

This is often the same as `annotationlib.get_annotations`, but this
function makes the following changes to the annotations dictionary:

* Forward references encoded as string literals or `ForwardRef`
  objects are handled by evaluating them in *globalns*, *localns*, and
  (where applicable) *obj*'s `type parameter` namespace.
  If *globalns* or *localns* is not given, appropriate namespace
  dictionaries are inferred from *obj*.
* `None` is replaced with `types.NoneType`.
* If `no_type_check` has been applied to *obj*, an
  empty dictionary is returned.
* If *obj* is a class `C`, the function returns a dictionary that merges
  annotations from `C`'s base classes with those on `C` directly. This
  is done by traversing `C.__mro__` and iteratively
  combining
  `annotations` of each base class. Annotations
  on classes appearing earlier in the `method resolution order` always
  take precedence over annotations on classes appearing later in the method
  resolution order.
* The function recursively replaces all occurrences of
  `Annotated[T, ...]`, `Required[T]`, `NotRequired[T]`, and `ReadOnly[T]`
  with `T`, unless *include_extras* is set to `True` (see
  `Annotated` for more information).

> **Caution**
>
> This function may execute arbitrary code contained in annotations.
> See `annotationlib-security` for more information.
>

> **Note**
>
> If `Format.VALUE` is used and any
> forward references in the annotations of *obj* are not resolvable, a
> `NameError` exception is raised. For example, this can happen
> with names imported under `if TYPE_CHECKING`.
> More generally, any kind of exception can be raised if an annotation
> contains invalid Python code.
>

> **Note**
>
> Calling `get_type_hints` on an instance is not supported.
> To retrieve annotations for an instance, call
> `get_type_hints` on the instance's class instead
> (for example, `get_type_hints(type(obj))`).
>

> *Changed in 3.9*: Added ``include_extras`` parameter as part of :pep:`593`. See the documentation on :data:`Annotated` for more information.

> *Changed in 3.11*: Previously, ``Optional[t]`` was added for function and method annotations if a default value equal to ``None`` was set. Now the annotation is returned unchanged.

> *Changed in 3.14*: Added the ``format`` parameter. See the documentation on :func:`annotationlib.get_annotations` for more information.

> *Changed in 3.14*: Calling :func:`get_type_hints` on instances is no longer supported. Some instances were accepted in earlier versions as an undocumented implementation detail.
