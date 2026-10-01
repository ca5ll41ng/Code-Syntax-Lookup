---
id: "python-en-function-unittest-mock-unittest-mock"
language: "python"
lang: "en"
category: "function"
name: "unittest.mock"
title: "Order of precedence of `side_effect`, `return_value` and *wraps*"
directive: "module"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#module-unittest.mock"
license: "PSF"
updated: "2026-10-01"
---

# Order of precedence of `side_effect`, `return_value` and *wraps*

**Order of precedence of `side_effect`, `return_value` and *wraps***

The order of their precedence is:

1. `~Mock.side_effect`
2. `~Mock.return_value`
3. *wraps*

If all three are set, mock will return the value from `~Mock.side_effect`,
ignoring `~Mock.return_value` and the wrapped object altogether. If any
two are set, the one with the higher precedence will return the value.
Regardless of the order of which was set first, the order of precedence
remains unchanged.

    >>> from unittest.mock import Mock
    >>> class Order:
    ...     @staticmethod
    ...     def get_value():
    ...         return "third"
    ...
    >>> order_mock = Mock(spec=Order, wraps=Order)
    >>> order_mock.get_value.side_effect = ["first"]
    >>> order_mock.get_value.return_value = "second"
    >>> order_mock.get_value()
    'first'

As `None` is the default value of `~Mock.side_effect`, if you reassign
its value back to `None`, the order of precedence will be checked between
`~Mock.return_value` and the wrapped object, ignoring
`~Mock.side_effect`.

    >>> order_mock.get_value.side_effect = None
    >>> order_mock.get_value()
    'second'

If the value being returned by `~Mock.side_effect` is `DEFAULT`,
it is ignored and the order of precedence moves to the successor to obtain the
value to return.

    >>> from unittest.mock import DEFAULT
    >>> order_mock.get_value.side_effect = [DEFAULT]
    >>> order_mock.get_value()
    'second'

When `Mock` wraps an object, the default value of
`~Mock.return_value` will be `DEFAULT`.

    >>> order_mock = Mock(spec=Order, wraps=Order)
    >>> order_mock.return_value
    sentinel.DEFAULT
    >>> order_mock.get_value.return_value
    sentinel.DEFAULT

The order of precedence will ignore this value and it will move to the last
successor which is the wrapped object.

As the real call is being made to the wrapped object, creating an instance of
this mock will return the real instance of the class. The positional arguments,
if any, required by the wrapped object must be passed.

    >>> order_mock_instance = order_mock()
    >>> isinstance(order_mock_instance, Order)
    True
    >>> order_mock_instance.get_value()
    'third'

    >>> order_mock.get_value.return_value = DEFAULT
    >>> order_mock.get_value()
    'third'

    >>> order_mock.get_value.return_value = "second"
    >>> order_mock.get_value()
    'second'

But if you assign `None` to it, this will not be ignored as it is an
explicit assignment. So, the order of precedence will not move to the wrapped
object.

    >>> order_mock.get_value.return_value = None
    >>> order_mock.get_value() is None
    True

Even if you set all three at once when initializing the mock, the order of
precedence remains the same:

    >>> order_mock = Mock(spec=Order, wraps=Order,
    ...                   **{"get_value.side_effect": ["first"],
    ...                      "get_value.return_value": "second"}
    ...                   )
    ...
    >>> order_mock.get_value()
    'first'
    >>> order_mock.get_value.side_effect = None
    >>> order_mock.get_value()
    'second'
    >>> order_mock.get_value.return_value = DEFAULT
    >>> order_mock.get_value()
    'third'

If `~Mock.side_effect` is `exhausted`, the order of precedence will not
cause a value to be obtained from the successors. Instead, `StopIteration`
exception is raised.

    >>> order_mock = Mock(spec=Order, wraps=Order)
    >>> order_mock.get_value.side_effect = ["first side effect value",
    ...                                     "another side effect value"]
    >>> order_mock.get_value.return_value = "second"

    >>> order_mock.get_value()
    'first side effect value'
    >>> order_mock.get_value()
    'another side effect value'

    >>> order_mock.get_value()
    Traceback (most recent call last):
     ...
    StopIteration
