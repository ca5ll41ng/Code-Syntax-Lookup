---
id: "python-en-function-typing-field_specifiers-kwargs"
language: "python"
lang: "en"
category: "function"
name: "field_specifiers=(), **kwargs)"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.field_specifiers=(), **kwargs)"
license: "PSF"
updated: "2026-10-01"
---

# field_specifiers=(), **kwargs)

Decorator to mark an object as providing
`dataclass`-like behavior.

`@dataclass_transform` may be used to
decorate a class, metaclass, or a function that is itself a decorator.
The presence of `@dataclass_transform()` tells a static type checker that the
decorated object performs runtime "magic" that
transforms a class in a similar way to
`dataclasses.dataclass`.

Example usage with a decorator function:

```python

@dataclass_transform()
def create_model[T](cls: type[T]) -> type[T]:
    ...
    return cls

@create_model
class CustomerModel:
    id: int
    name: str
```

On a base class::

   @dataclass_transform()
   class ModelBase: ...

   class CustomerModel(ModelBase):
       id: int
       name: str

On a metaclass::

   @dataclass_transform()
   class ModelMeta(type): ...

   class ModelBase(metaclass=ModelMeta): ...

   class CustomerModel(ModelBase):
       id: int
       name: str

The `CustomerModel` classes defined above will
be treated by type checkers similarly to classes created with
`dataclasses.dataclass`.
For example, type checkers will assume these classes have
`__init__` methods that accept `id` and `name`.

The decorated class, metaclass, or function may accept the following bool
arguments which type checkers will assume have the same effect as they
would have on the
`dataclasses.dataclass` decorator: `init`,
`eq`, `order`, `unsafe_hash`, `frozen`, `match_args`,
`kw_only`, and `slots`. It must be possible for the value of these
arguments (`True` or `False`) to be statically evaluated.

The arguments to the `@dataclass_transform` decorator can be used to
customize the default behaviors of the decorated class, metaclass, or
function:

:param bool eq_default:
    Indicates whether the `eq` parameter is assumed to be
    `True` or `False` if it is omitted by the caller.
    Defaults to `True`.

:param bool order_default:
    Indicates whether the `order` parameter is
    assumed to be `True` or `False` if it is omitted by the caller.
    Defaults to `False`.

:param bool kw_only_default:
    Indicates whether the `kw_only` parameter is
    assumed to be `True` or `False` if it is omitted by the caller.
    Defaults to `False`.

:param bool frozen_default:
    Indicates whether the `frozen` parameter is
    assumed to be `True` or `False` if it is omitted by the caller.
    Defaults to `False`.

> *Added in 3.12*

:param field_specifiers:
    Specifies a static list of supported classes
    or functions that describe fields, similar to `dataclasses.field`.
    Defaults to `()`.
:type field_specifiers: tuple[Callable[..., Any], ...]

:param Any \**kwargs:
    Arbitrary other keyword arguments are accepted in order to allow for
    possible future extensions.

Type checkers recognize the following optional parameters on field
specifiers:

list-table:: **Recognised parameters for field specifiers**

At runtime, this decorator records its arguments in the
`__dataclass_transform__` attribute on the decorated object.
It has no other runtime effect.

See PEP 681 for more details.

> *Added in 3.11*
